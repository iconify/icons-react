import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a35aq6bdj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a35aq6bdj"/>`,
		"fallback": "mingcute:contacts-4-line",
	});
}

export default Component;
