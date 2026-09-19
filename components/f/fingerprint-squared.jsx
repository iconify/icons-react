import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/k2beudkvl.css';
import '../../css/f/fi-6_qg2a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="k2beudkvl"/><path class="fi-6_qg2a"/></g>`,
		"fallback": "iconoir:fingerprint-squared",
	});
}

export default Component;
