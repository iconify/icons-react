import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nl26vvbqk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nl26vvbqk"/>`,
		"fallback": "withicons:git-branch-gloss",
	});
}

export default Component;
