import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t3z_4ymzy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t3z_4ymzy"/>`,
		"fallback": "la:bimobject",
	});
}

export default Component;
