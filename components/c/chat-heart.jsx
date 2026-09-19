import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kr4mn3_sb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kr4mn3_sb"/>`,
		"fallback": "bi:chat-heart",
	});
}

export default Component;
