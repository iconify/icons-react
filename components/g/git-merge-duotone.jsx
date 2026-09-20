import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/ggrpqy6eh.css';
import '../../css/u/u4cqb6bpk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ggrpqy6eh"/><path class="u4cqb6bpk"/></g>`,
		"fallback": "keyline-icons:git-merge-duotone",
	});
}

export default Component;
