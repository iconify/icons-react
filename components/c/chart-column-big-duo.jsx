import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zg2k18v-b.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/if_fr7tub.css';
import '../../css/v/vorae3l_s.css';
import '../../css/j/jbhde45qr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary zg2k18v-b"/><g class="dt0cm9dhy primary"><path class="if_fr7tub"/><path class="vorae3l_s"/><path class="jbhde45qr"/></g>`,
		"fallback": "iconaut:chart-column-big-duo",
	});
}

export default Component;
