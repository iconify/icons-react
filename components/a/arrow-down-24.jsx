import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rmje_kq9u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rmje_kq9u"/>`,
		"fallback": "octicon:arrow-down-24",
	});
}

export default Component;
