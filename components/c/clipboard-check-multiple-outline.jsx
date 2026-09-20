import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/royomp97n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="royomp97n"/>`,
		"fallback": "mdi:clipboard-check-multiple-outline",
	});
}

export default Component;
