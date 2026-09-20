import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/mhr8ssbfv.css';
import '../../css/k/kvyswhb9j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="mhr8ssbfv"/><path class="kvyswhb9j"/></g>`,
		"fallback": "streamline-ultimate:cog-hand-give-1",
	});
}

export default Component;
