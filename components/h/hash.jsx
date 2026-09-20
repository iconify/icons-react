import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sy5kwhgdm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sy5kwhgdm"/>`,
		"fallback": "mage:hash",
	});
}

export default Component;
