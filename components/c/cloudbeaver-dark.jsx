import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dri0rl5gb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dri0rl5gb"/>`,
		"fallback": "selfhst:cloudbeaver-dark",
	});
}

export default Component;
