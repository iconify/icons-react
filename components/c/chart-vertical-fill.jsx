import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lc0_cjb6y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lc0_cjb6y"/>`,
		"fallback": "mage:chart-vertical-fill",
	});
}

export default Component;
