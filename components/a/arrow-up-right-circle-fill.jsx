import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qd20b1j9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qd20b1j9f"/>`,
		"fallback": "mage:arrow-up-right-circle-fill",
	});
}

export default Component;
