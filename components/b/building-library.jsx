import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/msl9otbxu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="msl9otbxu"/>`,
		"fallback": "heroicons:building-library",
	});
}

export default Component;
