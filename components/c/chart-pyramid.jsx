import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nvuv9-98d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nvuv9-98d"/>`,
		"fallback": "keyline-icons:chart-pyramid",
	});
}

export default Component;
