import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mxg95ybdy.css';
import '../../css/k/kr-f3xbhb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mxg95ybdy"/><path class="kr-f3xbhb"/>`,
		"fallback": "lucide-extended:eye-off-filled",
	});
}

export default Component;
