import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mge4dfs-f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mge4dfs-f"/>`,
		"fallback": "selfhst:dadabik-light",
	});
}

export default Component;
