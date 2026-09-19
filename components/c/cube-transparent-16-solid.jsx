import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n2f20nb-b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n2f20nb-b"/>`,
		"fallback": "heroicons:cube-transparent-16-solid",
	});
}

export default Component;
