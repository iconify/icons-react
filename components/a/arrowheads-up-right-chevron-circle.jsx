import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zewnb2-ur.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zewnb2-ur"/>`,
		"fallback": "streamline-block:arrowheads-up-right-chevron-circle",
	});
}

export default Component;
