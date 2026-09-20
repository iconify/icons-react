import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sln4qdbyd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sln4qdbyd"/>`,
		"fallback": "lucide:captions-off",
	});
}

export default Component;
