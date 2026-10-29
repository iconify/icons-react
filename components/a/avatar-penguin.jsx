import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/ymwib75zz.css';
import '../../css/b/bbtncsbqa.css';
import '../../css/b/bk_7a7mqc.css';
import '../../css/m/mu_vexjve.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ymwib75zz"/><path class="bbtncsbqa"/><path class="bk_7a7mqc"/><path class="mu_vexjve"/></g>`,
		"fallback": "withicons-bauhaus:avatar-penguin",
	});
}

export default Component;
