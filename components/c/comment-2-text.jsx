import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zg38sdwxa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zg38sdwxa"/>`,
		"fallback": "majesticons:comment-2-text",
	});
}

export default Component;
