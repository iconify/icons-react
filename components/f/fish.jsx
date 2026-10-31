import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/p/ps53hqopa.css';
import '../../css/g/gme3y9biz.css';
import '../../css/p/pyar3wb_o.css';
import '../../css/t/th4c5pbhe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="ps53hqopa wm-shadow"/><path class="gme3y9biz wm-shadow"/><path class="pyar3wb_o"/><path class="th4c5pbhe"/></g>`,
		"fallback": "withicons-brutal:fish",
	});
}

export default Component;
