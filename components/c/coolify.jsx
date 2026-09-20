import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k0l5a0lfg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k0l5a0lfg"/>`,
		"fallback": "simple-icons:coolify",
	});
}

export default Component;
