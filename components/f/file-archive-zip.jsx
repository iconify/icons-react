import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/t/trpx56b8d.css';
import '../../css/l/ldpqcx-5g.css';
import '../../css/n/n_mlvb70n.css';
import '../../css/y/yi6_p1rrj.css';
import '../../css/g/g55ctc6do.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="trpx56b8d"/><path class="ldpqcx-5g"/><path class="n_mlvb70n"/><path class="yi6_p1rrj"/><path class="g55ctc6do"/></g>`,
		"fallback": "matita:file-archive-zip",
	});
}

export default Component;
