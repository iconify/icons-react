import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t3nz7t0_i.css';
import '../../css/z/zxzcak2rh.css';
import '../../css/q/qv7dlxb2b.css';
import '../../css/t/t0i_isgcr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="t3nz7t0_i"/><path class="zxzcak2rh"/><path class="qv7dlxb2b"/><ellipse class="t0i_isgcr"/></g>`,
		"fallback": "lucide:file-database",
	});
}

export default Component;
