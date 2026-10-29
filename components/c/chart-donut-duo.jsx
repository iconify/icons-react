import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/ugfrr8bnj.css';
import '../../css/z/zo12m9vrh.css';
import '../../css/u/uv6uwdbji.css';
import '../../css/v/v1055zads.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ugfrr8bnj"/><path class="wm-a zo12m9vrh"/><path class="uv6uwdbji wm-a"/><path class="v1055zads"/></g>`,
		"fallback": "withicons:chart-donut-duo",
	});
}

export default Component;
