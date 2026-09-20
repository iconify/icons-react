import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jzy3gmb2l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jzy3gmb2l"/>`,
		"fallback": "mdi-light:chevron-down",
	});
}

export default Component;
