import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kipb5hbui.css';
import '../../css/r/re5it907b.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="kipb5hbui"/><path class="re5it907b"/></g>`,
		"fallback": "skill-icons:gamemakerstudio",
	});
}

export default Component;
