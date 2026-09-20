import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j7rbojb3n.css';
import '../../css/a/ac-p9bb1h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j7rbojb3n"/><path class="ac-p9bb1h"/></g>`,
		"fallback": "streamline-ultimate-color:cellular-network-lte",
	});
}

export default Component;
