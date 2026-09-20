import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zcq99_yio.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zcq99_yio"/>`,
		"fallback": "mage:battery-charging-fill",
	});
}

export default Component;
