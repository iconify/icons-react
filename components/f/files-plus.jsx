import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yzx7h-bwh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yzx7h-bwh"/>`,
		"fallback": "noviair-light:files-plus",
	});
}

export default Component;
