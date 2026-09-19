import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i5j6f3bay.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i5j6f3bay"/>`,
		"fallback": "codicon:fish4-very-sad",
	});
}

export default Component;
