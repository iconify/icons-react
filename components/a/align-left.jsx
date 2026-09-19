import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/voxnpu-mg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="voxnpu-mg"/>`,
		"fallback": "iconoir:align-left",
	});
}

export default Component;
