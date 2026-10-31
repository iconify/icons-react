import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/by_r6bbiz.css';
import '../../css/y/y_57knbko.css';
import '../../css/t/tad6awcii.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="by_r6bbiz"/><path class="y_57knbko"/><path class="tad6awcii"/></g>`,
		"fallback": "lucide-extended:archive-arrow-down-duotone",
	});
}

export default Component;
