import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/igpt2fgqd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="igpt2fgqd"/>`,
		"fallback": "tdesign:fullscreen-2",
	});
}

export default Component;
