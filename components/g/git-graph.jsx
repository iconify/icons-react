import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/um413-_bf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="um413-_bf"/>`,
		"fallback": "keyline-icons:git-graph",
	});
}

export default Component;
