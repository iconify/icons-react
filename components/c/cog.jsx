import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/sjuw63b_k.css';
import '../../css/w/wlve4csvl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="sjuw63b_k"/><path class="wlve4csvl"/></g>`,
		"fallback": "streamline-ultimate:cog",
	});
}

export default Component;
