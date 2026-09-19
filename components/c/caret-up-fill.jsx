import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fvx9jwbgi.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fvx9jwbgi"/>`,
		"fallback": "bi:caret-up-fill",
	});
}

export default Component;
