import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mro7kxbsk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mro7kxbsk"/>`,
		"fallback": "pixel:angle-left",
	});
}

export default Component;
