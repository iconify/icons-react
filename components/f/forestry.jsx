import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tdex-9bdm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tdex-9bdm"/>`,
		"fallback": "simple-icons:forestry",
	});
}

export default Component;
