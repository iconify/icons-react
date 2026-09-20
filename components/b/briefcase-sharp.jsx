import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tipf2-b7q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tipf2-b7q"/>`,
		"fallback": "pixelarticons:briefcase-sharp",
	});
}

export default Component;
