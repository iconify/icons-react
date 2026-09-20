import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yfdgfs6fk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yfdgfs6fk"/>`,
		"fallback": "thesvg-color:gatus",
	});
}

export default Component;
