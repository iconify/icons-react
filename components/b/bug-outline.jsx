import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zcn2ntb-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zcn2ntb-f"/>`,
		"fallback": "mdi:bug-outline",
	});
}

export default Component;
