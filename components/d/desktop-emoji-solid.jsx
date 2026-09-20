import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yqrty5bjy.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yqrty5bjy"/>`,
		"fallback": "streamline:desktop-emoji-solid",
	});
}

export default Component;
