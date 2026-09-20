import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z8rzdkxgu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z8rzdkxgu"/>`,
		"fallback": "streamline-flex:gift-2-remix",
	});
}

export default Component;
