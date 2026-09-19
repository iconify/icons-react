import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kdl1zucwf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kdl1zucwf"/>`,
		"fallback": "heroicons:folder-open-solid",
	});
}

export default Component;
