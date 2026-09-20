import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kbq_a9bna.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kbq_a9bna"/>`,
		"fallback": "streamline-logos:fandom-logo-2-block",
	});
}

export default Component;
