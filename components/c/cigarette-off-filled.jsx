import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x6n1ambrh.css';
import '../../css/j/jcsy-xpip.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x6n1ambrh"/><path class="jcsy-xpip"/>`,
		"fallback": "lucide-extended:cigarette-off-filled",
	});
}

export default Component;
