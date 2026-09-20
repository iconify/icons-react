import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uq5o52bnj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uq5o52bnj"/>`,
		"fallback": "mage:file-upload-fill",
	});
}

export default Component;
