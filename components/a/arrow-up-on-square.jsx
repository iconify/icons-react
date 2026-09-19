import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kpya52bie.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kpya52bie"/>`,
		"fallback": "heroicons-solid:arrow-up-on-square",
	});
}

export default Component;
