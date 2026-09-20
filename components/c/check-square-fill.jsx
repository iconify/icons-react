import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uoufhkb3a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uoufhkb3a"/>`,
		"fallback": "mage:check-square-fill",
	});
}

export default Component;
