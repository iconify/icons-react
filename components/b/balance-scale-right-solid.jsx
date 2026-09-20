import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/op63yotmw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="op63yotmw"/>`,
		"fallback": "la:balance-scale-right-solid",
	});
}

export default Component;
