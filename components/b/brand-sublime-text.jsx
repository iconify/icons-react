import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zr5utj3pr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zr5utj3pr"/>`,
		"fallback": "tabler:brand-sublime-text",
	});
}

export default Component;
