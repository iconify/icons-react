import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n26w-wbqy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n26w-wbqy"/>`,
		"fallback": "octicon:chat-question-16",
	});
}

export default Component;
