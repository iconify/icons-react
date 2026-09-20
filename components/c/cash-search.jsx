import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/ph1b-jzdl.css';
import '../../css/p/pkwgh1b4k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ph1b-jzdl"/><path class="pkwgh1b4k"/></g>`,
		"fallback": "streamline-ultimate:cash-search",
	});
}

export default Component;
