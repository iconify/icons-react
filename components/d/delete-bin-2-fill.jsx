import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cszim8v5i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cszim8v5i"/>`,
		"fallback": "ri:delete-bin-2-fill",
	});
}

export default Component;
