import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jq6no00vm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jq6no00vm"/>`,
		"fallback": "mingcute:award-line",
	});
}

export default Component;
