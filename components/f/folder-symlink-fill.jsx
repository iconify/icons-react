import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vhvlu6b2s.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vhvlu6b2s"/>`,
		"fallback": "bi:folder-symlink-fill",
	});
}

export default Component;
