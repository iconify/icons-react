import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yl_bdxm0t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yl_bdxm0t"/>`,
		"fallback": "griddy-icons:component-tabs-filled",
	});
}

export default Component;
