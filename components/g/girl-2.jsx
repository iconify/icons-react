import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vkpfgi2gc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vkpfgi2gc"/>`,
		"fallback": "ps:girl-2",
	});
}

export default Component;
