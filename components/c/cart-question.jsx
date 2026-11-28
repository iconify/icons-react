import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dbmsg7kfz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dbmsg7kfz"/>`,
		"fallback": "noviair-light:cart-question",
	});
}

export default Component;
