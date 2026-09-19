import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m769hdc0i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m769hdc0i"/>`,
		"fallback": "bi:file-earmark-x-fill",
	});
}

export default Component;
