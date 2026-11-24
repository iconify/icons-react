import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xlxa70wnv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xlxa70wnv"/>`,
		"fallback": "lucide-extended:drafting-compass-filled",
	});
}

export default Component;
