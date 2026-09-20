import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sjntf3bwh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sjntf3bwh"/>`,
		"fallback": "keyline-icons:git-fork",
	});
}

export default Component;
