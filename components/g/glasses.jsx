import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xl5suacty.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xl5suacty"/>`,
		"fallback": "fa-solid:glasses",
	});
}

export default Component;
