import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gcfdrebfg.css';
import '../../css/y/y7tchybym.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gcfdrebfg"/><path clip-rule="evenodd" class="y7tchybym"/>`,
		"fallback": "mingcute:folder-forbid-fill",
	});
}

export default Component;
