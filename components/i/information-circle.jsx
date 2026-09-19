import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nyy3hyach.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nyy3hyach"/>`,
		"fallback": "heroicons-solid:information-circle",
	});
}

export default Component;
