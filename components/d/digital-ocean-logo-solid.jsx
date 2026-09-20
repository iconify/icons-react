import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rmpx7kb_w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rmpx7kb_w"/>`,
		"fallback": "streamline-logos:digital-ocean-logo-solid",
	});
}

export default Component;
