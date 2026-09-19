import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ho1f8abze.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ho1f8abze"/>`,
		"fallback": "bi:cone",
	});
}

export default Component;
