import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gsyyo2b3u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gsyyo2b3u"/>`,
		"fallback": "lucide:bookmark-minus",
	});
}

export default Component;
