import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/x_ze_6num.css';
import '../../css/c/colzh71fi.css';
import '../../css/d/dzmqt9bpj.css';
import '../../css/z/zwvnm1o0e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-k x_ze_6num"/><path class="colzh71fi"/><path class="dzmqt9bpj"/><path class="wm-s zwvnm1o0e"/></g>`,
		"fallback": "withicons-bauhaus:gavel",
	});
}

export default Component;
