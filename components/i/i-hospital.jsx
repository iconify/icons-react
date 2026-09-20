import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pm2eallgz.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pm2eallgz"/>`,
		"fallback": "medical-icon:i-hospital",
	});
}

export default Component;
