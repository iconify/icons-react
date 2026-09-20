import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ka5zrvgwj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ka5zrvgwj"/>`,
		"fallback": "lucide:folder-x",
	});
}

export default Component;
