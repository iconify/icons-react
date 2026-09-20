import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yl5bsbfss.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yl5bsbfss"/>`,
		"fallback": "keyline-icons:cloud-plus-sharp",
	});
}

export default Component;
