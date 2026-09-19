import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/di1mk4dfd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="di1mk4dfd"/>`,
		"fallback": "heroicons:equals-20-solid",
	});
}

export default Component;
