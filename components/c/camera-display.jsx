import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/phf8mbbug.css';
import '../../css/w/wzyzn-bgy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="phf8mbbug"/><path class="wzyzn-bgy"/></g>`,
		"fallback": "streamline-ultimate:camera-display",
	});
}

export default Component;
