import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x_akeuekh.css';

const viewBox = {"width":768,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x_akeuekh"/>`,
		"fallback": "whh:brailleeight",
	});
}

export default Component;
