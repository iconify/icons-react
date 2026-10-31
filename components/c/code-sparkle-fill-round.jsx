import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eftem4_0g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eftem4_0g"/>`,
		"fallback": "coolicons:code-sparkle-fill-round",
	});
}

export default Component;
