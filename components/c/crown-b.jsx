import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yz89a7_fx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yz89a7_fx"/>`,
		"fallback": "mage:crown-b",
	});
}

export default Component;
