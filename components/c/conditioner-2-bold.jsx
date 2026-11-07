import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o9_1xi4pr.css';
import '../../css/h/h6gyfp-2l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o9_1xi4pr"/><path class="h6gyfp-2l"/>`,
		"fallback": "solar:conditioner-2-bold",
	});
}

export default Component;
