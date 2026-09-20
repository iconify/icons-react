import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ikxd3jb2y.css';
import '../../css/b/b3ex35ova.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ikxd3jb2y"/><path class="b3ex35ova"/>`,
		"fallback": "selfhst:gitea",
	});
}

export default Component;
