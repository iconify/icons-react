import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i0xk1spxw.css';
import '../../css/r/rl8wzi39v.css';
import '../../css/m/mv-u1xbxu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i0xk1spxw"/><path class="rl8wzi39v"/><path class="mv-u1xbxu"/>`,
		"fallback": "energy-icons:connector-mcs-20-bold",
	});
}

export default Component;
