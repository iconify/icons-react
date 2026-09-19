import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j2cy3dh3i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j2cy3dh3i"/>`,
		"fallback": "bi:emoji-neutral-fill",
	});
}

export default Component;
