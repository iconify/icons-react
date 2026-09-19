import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pdaswzbvz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pdaswzbvz"/>`,
		"fallback": "heroicons-solid:chevron-up",
	});
}

export default Component;
