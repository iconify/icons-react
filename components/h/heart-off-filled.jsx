import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wjjqtn5tw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wjjqtn5tw"/>`,
		"fallback": "lucide-extended:heart-off-filled",
	});
}

export default Component;
