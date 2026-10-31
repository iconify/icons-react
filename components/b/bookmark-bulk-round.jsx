import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jc9s3i56l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jc9s3i56l"/>`,
		"fallback": "coolicons:bookmark-bulk-round",
	});
}

export default Component;
