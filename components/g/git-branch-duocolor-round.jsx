import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/m7x8mubvw.css';
import '../../css/y/yk_hhruzq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="m7x8mubvw"/><path class="yk_hhruzq"/></g>`,
		"fallback": "coolicons:git-branch-duocolor-round",
	});
}

export default Component;
