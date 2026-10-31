import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/o/o-y9ne8rd.css';
import '../../css/y/y80u3ccgb.css';
import '../../css/d/du8j5tjti.css';
import '../../css/j/j31vlztoy.css';
import '../../css/b/bcwb5obng.css';
import '../../css/h/hu22j2e_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="o-y9ne8rd wm-shadow"/><path class="y80u3ccgb"/><path class="du8j5tjti"/><path class="j31vlztoy"/><path class="bcwb5obng"/><path class="hu22j2e_n"/></g>`,
		"fallback": "withicons-retro:avatar-tiger",
	});
}

export default Component;
