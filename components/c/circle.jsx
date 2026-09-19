import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmw8fw_wo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nmw8fw_wo"/>`,
		"fallback": "pepicons:circle",
	});
}

export default Component;
