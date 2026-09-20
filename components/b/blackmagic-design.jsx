import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rbzqk44pj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rbzqk44pj"/>`,
		"fallback": "thesvg-color:blackmagic-design",
	});
}

export default Component;
