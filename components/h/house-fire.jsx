import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/drisdm45b.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="drisdm45b"/>`,
		"fallback": "fa7-solid:house-fire",
	});
}

export default Component;
