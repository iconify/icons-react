import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vrb9f-tmw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vrb9f-tmw"/>`,
		"fallback": "heroicons-solid:building-office-2",
	});
}

export default Component;
