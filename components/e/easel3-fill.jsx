import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/az63m7b8s.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="az63m7b8s"/>`,
		"fallback": "bi:easel3-fill",
	});
}

export default Component;
