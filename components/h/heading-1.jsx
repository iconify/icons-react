import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sipm7-qkj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sipm7-qkj"/>`,
		"fallback": "lucide:heading-1",
	});
}

export default Component;
