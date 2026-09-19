import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/re2vbxbry.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="re2vbxbry"/>`,
		"fallback": "bi:emoji-laughing-fill",
	});
}

export default Component;
