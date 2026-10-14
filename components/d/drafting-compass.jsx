import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/o/ok_hdd46i.css';
import '../../css/r/r6jly0bva.css';
import '../../css/g/g8qaqv_gb.css';
import '../../css/u/ulldvebzg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="ok_hdd46i"/><path class="r6jly0bva"/><path class="g8qaqv_gb"/><path class="ulldvebzg"/></g>`,
		"fallback": "matita:drafting-compass",
	});
}

export default Component;
