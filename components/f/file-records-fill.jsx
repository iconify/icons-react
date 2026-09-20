import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lqm2fd0cl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lqm2fd0cl"/>`,
		"fallback": "mage:file-records-fill",
	});
}

export default Component;
