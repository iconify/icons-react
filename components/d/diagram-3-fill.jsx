import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l231--b6x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l231--b6x"/>`,
		"fallback": "bi:diagram-3-fill",
	});
}

export default Component;
