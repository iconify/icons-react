import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/drk3p-42n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="drk3p-42n"/>`,
		"fallback": "mage:home-2",
	});
}

export default Component;
