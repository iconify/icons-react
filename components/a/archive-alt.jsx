import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gjxrqjgru.css';
import '../../css/a/ads37eh-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gjxrqjgru"/><path class="ads37eh-c"/>`,
		"fallback": "boxicons:archive-alt",
	});
}

export default Component;
