import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/e/ecjyiacqx.css';
import '../../css/i/i8r_mr_be.css';
import '../../css/x/x-fkqvbof.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><rect class="ecjyiacqx"/><rect class="i8r_mr_be"/><path class="x-fkqvbof"/></g>`,
		"fallback": "lets-icons:headphones-fill",
	});
}

export default Component;
