import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ypzybbb4r.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ypzybbb4r"/>`,
		"fallback": "heroicons:chart-bar-20-solid",
	});
}

export default Component;
