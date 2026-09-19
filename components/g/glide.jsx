import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jkhojy80r.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jkhojy80r"/>`,
		"fallback": "fa7-brands:glide",
	});
}

export default Component;
