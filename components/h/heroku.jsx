import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f5flz2bah.css';
import '../../css/j/jfay4zb8i.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="f5flz2bah"/><path class="jfay4zb8i"/></g>`,
		"fallback": "skill-icons:heroku",
	});
}

export default Component;
