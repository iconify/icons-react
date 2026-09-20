import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwjl2vbvf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wwjl2vbvf"/>`,
		"fallback": "keyline-icons:circle-indian-rupee-sharp-fill",
	});
}

export default Component;
