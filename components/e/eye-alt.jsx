import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/kepivwbki.css';
import '../../css/t/tyyeymbet.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="kepivwbki"/><path class="tyyeymbet"/></g>`,
		"fallback": "iconoir:eye-alt",
	});
}

export default Component;
