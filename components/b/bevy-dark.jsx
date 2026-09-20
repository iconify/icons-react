import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zdw9dcb7o.css';
import '../../css/m/mv06jzbvx.css';
import '../../css/i/i2wby7b4z.css';
import '../../css/h/hcp85kb8d.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="zdw9dcb7o"/><path class="mv06jzbvx"/><path class="i2wby7b4z"/><path class="hcp85kb8d"/></g>`,
		"fallback": "skill-icons:bevy-dark",
	});
}

export default Component;
