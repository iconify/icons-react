import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tqnm491cc.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tqnm491cc"/>`,
		"fallback": "f7:gobackward-minus",
	});
}

export default Component;
