import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uiupigchs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uiupigchs"/>`,
		"fallback": "lucide-extended:eclipse-filled",
	});
}

export default Component;
