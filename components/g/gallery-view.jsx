import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bvfwx8oct.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bvfwx8oct"/>`,
		"fallback": "ri:gallery-view",
	});
}

export default Component;
