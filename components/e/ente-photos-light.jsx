import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ri3z_o84b.css';
import '../../css/d/dghaoubtt.css';
import '../../css/f/fu8qg7bvm.css';
import '../../css/f/f4-o-bcct.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ri3z_o84b"/><path class="dghaoubtt"/><path class="fu8qg7bvm"/><path class="f4-o-bcct"/>`,
		"fallback": "selfhst:ente-photos-light",
	});
}

export default Component;
