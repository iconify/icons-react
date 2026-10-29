import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/l/lw1neobmf.css';
import '../../css/z/zife4jb2j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="lw1neobmf"/><path class="zife4jb2j"/></g>`,
		"fallback": "withicons-bauhaus:book-open-text",
	});
}

export default Component;
