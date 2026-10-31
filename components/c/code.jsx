import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/qa_z-e57i.css';
import '../../css/v/vj5cpf__a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="qa_z-e57i"/><path class="vj5cpf__a"/></g>`,
		"fallback": "withicons-retro:code",
	});
}

export default Component;
