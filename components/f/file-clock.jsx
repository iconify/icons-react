import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h7el7udao.css';
import '../../css/g/g017pksnm.css';
import '../../css/e/eg2568bgn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="h7el7udao"/><path class="g017pksnm"/><circle class="eg2568bgn"/></g>`,
		"fallback": "lucide:file-clock",
	});
}

export default Component;
