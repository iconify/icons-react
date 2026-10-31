import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y_57knbko.css';
import '../../css/a/aucu8lbjw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y_57knbko"/><path class="aucu8lbjw"/></g>`,
		"fallback": "lucide-extended:archive-arrow-up-duotone",
	});
}

export default Component;
