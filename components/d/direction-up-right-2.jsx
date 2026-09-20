import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ptn6lmbaz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ptn6lmbaz"/>`,
		"fallback": "mage:direction-up-right-2",
	});
}

export default Component;
