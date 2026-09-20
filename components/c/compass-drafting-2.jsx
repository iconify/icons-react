import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx1b5gb8n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jx1b5gb8n"/>`,
		"fallback": "lineicons:compass-drafting-2",
	});
}

export default Component;
