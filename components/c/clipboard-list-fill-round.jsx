import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jccexw19j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jccexw19j"/>`,
		"fallback": "coolicons:clipboard-list-fill-round",
	});
}

export default Component;
