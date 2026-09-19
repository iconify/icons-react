import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uiob6verm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uiob6verm"/>`,
		"fallback": "bi:grid-fill",
	});
}

export default Component;
