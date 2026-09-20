import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b6_7reery.css';
import '../../css/u/uafqgrdqp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b6_7reery"/><path class="uafqgrdqp"/></g>`,
		"fallback": "streamline-ultimate-color:diagram-arrow-down-1",
	});
}

export default Component;
