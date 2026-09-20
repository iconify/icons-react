import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p_2ax6o9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p_2ax6o9y"/>`,
		"fallback": "octicon:comment-24",
	});
}

export default Component;
