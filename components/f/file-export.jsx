import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xr9j7pbzm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xr9j7pbzm"/>`,
		"fallback": "prime:file-export",
	});
}

export default Component;
