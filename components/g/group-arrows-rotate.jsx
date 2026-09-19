import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nvv4pgb6c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nvv4pgb6c"/>`,
		"fallback": "fa6-solid:group-arrows-rotate",
	});
}

export default Component;
