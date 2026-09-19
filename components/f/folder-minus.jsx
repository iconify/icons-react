import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n4k_d7bbv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n4k_d7bbv"/>`,
		"fallback": "heroicons:folder-minus",
	});
}

export default Component;
