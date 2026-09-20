import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ut0zqgb2n.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ut0zqgb2n"/>`,
		"fallback": "streamline-flex:dislike-circle-remix",
	});
}

export default Component;
