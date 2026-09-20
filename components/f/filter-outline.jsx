import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jyatf7whr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jyatf7whr"/>`,
		"fallback": "solar:filter-outline",
	});
}

export default Component;
