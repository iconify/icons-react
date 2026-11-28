import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tb9dmbc2m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tb9dmbc2m"/>`,
		"fallback": "noviair-light:circle-1",
	});
}

export default Component;
