import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h6uue9b2w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h6uue9b2w"/>`,
		"fallback": "healthicons:bladder-outline",
	});
}

export default Component;
