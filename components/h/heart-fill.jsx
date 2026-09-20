import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x30hg2b-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x30hg2b-o"/>`,
		"fallback": "ri:heart-fill",
	});
}

export default Component;
