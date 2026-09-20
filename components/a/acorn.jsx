import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rar_2_a4s.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rar_2_a4s"/>`,
		"fallback": "roentgen:acorn",
	});
}

export default Component;
