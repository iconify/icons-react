import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bngpm7b9s.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bngpm7b9s"/>`,
		"fallback": "bi:chevron-bar-up",
	});
}

export default Component;
