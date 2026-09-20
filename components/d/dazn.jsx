import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b6-ju_xjg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b6-ju_xjg"/>`,
		"fallback": "thesvg-color:dazn",
	});
}

export default Component;
