import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fwdbhvfaz.css';
import '../../css/x/xj-vmnbln.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fwdbhvfaz"/><path class="xj-vmnbln"/>`,
		"fallback": "token:ggg",
	});
}

export default Component;
