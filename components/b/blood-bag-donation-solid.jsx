import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/khn35wb3e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="khn35wb3e"/>`,
		"fallback": "streamline-sharp:blood-bag-donation-solid",
	});
}

export default Component;
