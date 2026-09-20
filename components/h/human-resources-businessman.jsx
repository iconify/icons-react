import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pnd0a-8mb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pnd0a-8mb"/>`,
		"fallback": "streamline-ultimate:human-resources-businessman",
	});
}

export default Component;
