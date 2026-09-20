import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xdam21bxf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xdam21bxf"/>`,
		"fallback": "mage:focus-fill",
	});
}

export default Component;
