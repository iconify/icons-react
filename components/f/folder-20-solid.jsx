import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/et4u17bqr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="et4u17bqr"/>`,
		"fallback": "heroicons:folder-20-solid",
	});
}

export default Component;
