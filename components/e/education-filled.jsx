import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dae8fsb4j.css';
import '../../css/e/e3_9xhb7n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dae8fsb4j"/><path class="e3_9xhb7n"/>`,
		"fallback": "tdesign:education-filled",
	});
}

export default Component;
