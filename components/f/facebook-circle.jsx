import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gw_-6tbwn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gw_-6tbwn"/>`,
		"fallback": "mage:facebook-circle",
	});
}

export default Component;
