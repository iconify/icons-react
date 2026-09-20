import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/d/dmkuafbjo.css';
import '../../css/i/incycubso.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="dmkuafbjo"/><path class="incycubso"/></g>`,
		"fallback": "keyline-icons:git-branch-minus-sharp-two-tone",
	});
}

export default Component;
