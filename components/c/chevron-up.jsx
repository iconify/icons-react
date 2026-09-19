import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ndh7-hb3r.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ndh7-hb3r"/>`,
		"fallback": "carbon:chevron-up",
	});
}

export default Component;
