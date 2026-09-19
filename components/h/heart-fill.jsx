import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pkex97b5e.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pkex97b5e"/>`,
		"fallback": "bi:heart-fill",
	});
}

export default Component;
