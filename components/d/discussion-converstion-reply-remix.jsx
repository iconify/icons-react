import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bj7awu1ad.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bj7awu1ad"/>`,
		"fallback": "streamline-flex:discussion-converstion-reply-remix",
	});
}

export default Component;
