import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ljt5gjl9a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ljt5gjl9a"/>`,
		"fallback": "selfhst:gitea-dark",
	});
}

export default Component;
