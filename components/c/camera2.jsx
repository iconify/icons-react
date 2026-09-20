import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cvtzdzbdn.css';
import '../../css/a/alhb85b0y.css';
import '../../css/r/r3bq5ybxj.css';
import '../../css/q/qdpsikbik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="cvtzdzbdn"/><rect class="alhb85b0y"/><circle class="r3bq5ybxj"/><path class="qdpsikbik"/></g>`,
		"fallback": "reicon:camera2",
	});
}

export default Component;
