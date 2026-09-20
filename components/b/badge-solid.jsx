import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f3i8qubmv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f3i8qubmv"/>`,
		"fallback": "mynaui:badge-solid",
	});
}

export default Component;
