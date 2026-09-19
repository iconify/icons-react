import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cn2xtke3s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cn2xtke3s"/>`,
		"fallback": "iconamoon:backspace-light",
	});
}

export default Component;
