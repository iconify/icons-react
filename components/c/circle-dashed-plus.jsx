import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cr0l9189m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cr0l9189m"/>`,
		"fallback": "tabler:circle-dashed-plus",
	});
}

export default Component;
