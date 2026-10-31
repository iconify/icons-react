import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uv3cqb9cv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uv3cqb9cv"/>`,
		"fallback": "withicons:file-minus-gloss",
	});
}

export default Component;
