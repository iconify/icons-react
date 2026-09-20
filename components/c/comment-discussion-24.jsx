import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kgfmt1b6e.css';
import '../../css/y/yo3cu2bak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kgfmt1b6e"/><path class="yo3cu2bak"/>`,
		"fallback": "octicon:comment-discussion-24",
	});
}

export default Component;
