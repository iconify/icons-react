import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/w38g40bvp.css';
import '../../css/c/cq3t79bqd.css';
import '../../css/m/m-2o9kbye.css';
import '../../css/g/gwbv7zb2x.css';
import '../../css/p/pxjisubfp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="w38g40bvp"/><circle class="cq3t79bqd"/><circle class="m-2o9kbye"/><circle class="gwbv7zb2x"/><circle class="pxjisubfp"/></g>`,
		"fallback": "lucide:graph-path",
	});
}

export default Component;
