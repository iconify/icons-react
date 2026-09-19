import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/knjor4pcd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="knjor4pcd"/>`,
		"fallback": "feather:fast-forward",
	});
}

export default Component;
