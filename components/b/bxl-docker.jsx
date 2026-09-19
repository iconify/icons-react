import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d3fkajbsr.css';
import '../../css/u/uyw9-zbfi.css';
import '../../css/r/rktspef3f.css';
import '../../css/y/ys57o7bto.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d3fkajbsr"/><path class="uyw9-zbfi"/><rect class="rktspef3f"/><path class="ys57o7bto"/>`,
		"fallback": "bx:bxl-docker",
	});
}

export default Component;
