import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pil_10b4p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pil_10b4p"/>`,
		"fallback": "mingcute:folder-git-line",
	});
}

export default Component;
