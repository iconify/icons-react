import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p226ibona.css';
import '../../css/d/d8x-s61pe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p226ibona"/><path class="d8x-s61pe"/>`,
		"fallback": "mingcute:folder-security-fill",
	});
}

export default Component;
