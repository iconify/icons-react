import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xa7inn8kq.css';
import '../../css/j/jyz7rxqdm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xa7inn8kq"/><path class="jyz7rxqdm"/></g>`,
		"fallback": "coolicons:image-sparkle-duotone-round",
	});
}

export default Component;
