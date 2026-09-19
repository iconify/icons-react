import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v88f60b3r.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v88f60b3r"/>`,
		"fallback": "clarity:hashtag-line",
	});
}

export default Component;
