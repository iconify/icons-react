import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jbg306bnm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jbg306bnm"/>`,
		"fallback": "reicon:circle-arrow-down",
	});
}

export default Component;
