import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/sepu64yyk.css';
import '../../css/g/gy3b7kixu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="sepu64yyk"/><path class="gy3b7kixu"/></g>`,
		"fallback": "withicons-bauhaus:case-sensitive",
	});
}

export default Component;
