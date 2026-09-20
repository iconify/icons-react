import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hmqdgf2hf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hmqdgf2hf"/>`,
		"fallback": "tdesign:ice-cream-filled",
	});
}

export default Component;
