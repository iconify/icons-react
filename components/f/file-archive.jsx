import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/th45_7bih.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="th45_7bih"/>`,
		"fallback": "ci:file-archive",
	});
}

export default Component;
