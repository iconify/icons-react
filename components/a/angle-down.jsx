import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iadv0h46r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iadv0h46r"/>`,
		"fallback": "pixel:angle-down",
	});
}

export default Component;
