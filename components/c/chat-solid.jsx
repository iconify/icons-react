import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bsz22fr3k.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bsz22fr3k"/>`,
		"fallback": "rivet-icons:chat-solid",
	});
}

export default Component;
