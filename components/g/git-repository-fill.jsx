import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/abai76h0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="abai76h0v"/>`,
		"fallback": "ri:git-repository-fill",
	});
}

export default Component;
