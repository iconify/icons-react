import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/if_fr7tub.css';
import '../../css/p/pb0h07b3i.css';
import '../../css/o/o_e4ed8vb.css';
import '../../css/b/b-ozjw1lj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="if_fr7tub"/><path class="pb0h07b3i"/><path class="o_e4ed8vb"/><path class="b-ozjw1lj"/></g>`,
		"fallback": "iconaut:bar-chart-horizontal",
	});
}

export default Component;
