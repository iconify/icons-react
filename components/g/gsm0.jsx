import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sajs9zlog.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sajs9zlog"/>`,
		"fallback": "picon:gsm0",
	});
}

export default Component;
