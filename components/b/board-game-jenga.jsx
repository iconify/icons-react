import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rn_0s_bdl.css';
import '../../css/r/rzq8dvbgl.css';
import '../../css/q/q1ijj6hsl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="rn_0s_bdl"/><path class="rzq8dvbgl"/><path class="q1ijj6hsl"/></g>`,
		"fallback": "streamline-ultimate:board-game-jenga",
	});
}

export default Component;
