import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ac36-yj6s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ac36-yj6s"/>`,
		"fallback": "coolicons:folder-code-fill-round",
	});
}

export default Component;
