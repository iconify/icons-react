import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lxg3z72tz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lxg3z72tz"/>`,
		"fallback": "selfhst:git-pages-dark",
	});
}

export default Component;
