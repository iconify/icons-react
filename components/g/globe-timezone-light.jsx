import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ei6395-9p.css';
import '../../css/e/ekf9xwedv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ei6395-9p"/><path class="ekf9xwedv"/>`,
		"fallback": "stash:globe-timezone-light",
	});
}

export default Component;
