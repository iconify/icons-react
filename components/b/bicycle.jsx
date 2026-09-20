import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/v-0-ewrjt.css';
import '../../css/q/q27rlmatp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="v-0-ewrjt"/><path class="q27rlmatp"/></g>`,
		"fallback": "streamline-ultimate:bicycle",
	});
}

export default Component;
