import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pk511mbit.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/if_fr7tub.css';
import '../../css/e/exnkhlvdn.css';
import '../../css/v/v686tqbit.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pk511mbit secondary"/><g class="dt0cm9dhy primary"><path class="if_fr7tub"/><path class="exnkhlvdn"/><path class="v686tqbit"/></g>`,
		"fallback": "iconaut:chart-area-stacked-duo",
	});
}

export default Component;
