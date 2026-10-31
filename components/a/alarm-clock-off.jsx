import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/g/gccel7p_k.css';
import '../../css/u/umkovfb1e.css';
import '../../css/q/qfduv35ic.css';
import '../../css/f/fqftw_bli.css';
import '../../css/v/vvx5zcbvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="gccel7p_k wm-shadow"/><path class="umkovfb1e wm-shadow"/><path class="qfduv35ic"/><path class="fqftw_bli"/><path class="vvx5zcbvx wm-s"/></g>`,
		"fallback": "withicons-brutal:alarm-clock-off",
	});
}

export default Component;
