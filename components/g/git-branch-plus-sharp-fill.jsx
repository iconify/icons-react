import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/a/ajxhoqnap.css';
import '../../css/r/rsvzw6bws.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="ajxhoqnap"/><path class="rsvzw6bws"/></g>`,
		"fallback": "keyline-icons:git-branch-plus-sharp-fill",
	});
}

export default Component;
