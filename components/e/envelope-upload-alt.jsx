import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oods8obzf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oods8obzf"/>`,
		"fallback": "uil:envelope-upload-alt",
	});
}

export default Component;
