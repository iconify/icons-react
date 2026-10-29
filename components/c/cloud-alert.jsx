import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/qnmo8x8sj.css';
import '../../css/q/qz74shhnc.css';
import '../../css/d/dx7yjir4i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="qnmo8x8sj"/><path class="qz74shhnc"/><path class="dx7yjir4i"/></g>`,
		"fallback": "withicons-bauhaus:cloud-alert",
	});
}

export default Component;
