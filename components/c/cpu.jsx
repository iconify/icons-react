import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jntgufw4d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jntgufw4d"/>`,
		"fallback": "bi:cpu",
	});
}

export default Component;
