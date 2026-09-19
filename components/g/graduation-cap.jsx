import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e8lng_b0e.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e8lng_b0e"/>`,
		"fallback": "gravity-ui:graduation-cap",
	});
}

export default Component;
