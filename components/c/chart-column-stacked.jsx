import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/if_fr7tub.css';
import '../../css/v/vn442-jke.css';
import '../../css/x/x302x6xca.css';
import '../../css/l/lrn0xrqqu.css';
import '../../css/k/kgl9logqp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="if_fr7tub"/><path class="vn442-jke"/><path class="x302x6xca"/><path class="lrn0xrqqu"/><path class="kgl9logqp"/></g>`,
		"fallback": "iconaut:chart-column-stacked",
	});
}

export default Component;
