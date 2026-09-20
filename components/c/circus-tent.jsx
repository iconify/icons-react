import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/i0uohk9ph.css';
import '../../css/h/h3_nobb-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="i0uohk9ph"/><path class="h3_nobb-e"/></g>`,
		"fallback": "streamline-ultimate:circus-tent",
	});
}

export default Component;
