import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yoj1vqbud.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yoj1vqbud"/>`,
		"fallback": "tdesign:ai-coordinate-system-filled",
	});
}

export default Component;
