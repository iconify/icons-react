import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yi_glab8s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yi_glab8s"/>`,
		"fallback": "carbon:airline-digital-gate",
	});
}

export default Component;
