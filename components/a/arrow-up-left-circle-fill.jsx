import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x04vd8uuy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x04vd8uuy"/>`,
		"fallback": "bi:arrow-up-left-circle-fill",
	});
}

export default Component;
