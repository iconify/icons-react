import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ogixtzbek.css';
import '../../css/q/qw3i1bb7d.css';
import '../../css/s/s5mze7vka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ogixtzbek"/><path class="qw3i1bb7d"/><path class="s5mze7vka"/></g>`,
		"fallback": "andrsrxn:crop",
	});
}

export default Component;
