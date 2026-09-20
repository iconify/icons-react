import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr95f2b0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pr95f2b0l"/>`,
		"fallback": "lucide:flip-vertical-2",
	});
}

export default Component;
