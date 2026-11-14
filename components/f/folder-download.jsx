import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ifnat4ciq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ifnat4ciq"/>`,
		"fallback": "hugeicons:folder-download",
	});
}

export default Component;
