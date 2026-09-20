import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y-1bwbbff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y-1bwbbff"/>`,
		"fallback": "mage:file-download-fill",
	});
}

export default Component;
