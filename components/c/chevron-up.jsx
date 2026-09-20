import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a_awtobjf.css';

const viewBox = {"width":24,"height":24,"left":-5,"top":-7.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a_awtobjf"/>`,
		"fallback": "jam:chevron-up",
	});
}

export default Component;
