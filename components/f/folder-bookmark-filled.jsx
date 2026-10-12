import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx26_9q9g.css';
import '../../css/f/fxj5wpbnh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jx26_9q9g"/><path class="fxj5wpbnh"/>`,
		"fallback": "lucide-extended:folder-bookmark-filled",
	});
}

export default Component;
