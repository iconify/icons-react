import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vcmvgqgbw.css';
import '../../css/s/sc6d7r8ls.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vcmvgqgbw"/><path class="sc6d7r8ls"/>`,
		"fallback": "tdesign:bookmark-minus-filled",
	});
}

export default Component;
