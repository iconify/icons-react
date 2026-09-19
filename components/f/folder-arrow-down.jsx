import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bck-16bdi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bck-16bdi"/>`,
		"fallback": "heroicons:folder-arrow-down",
	});
}

export default Component;
