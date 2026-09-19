import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dn5ygw8-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dn5ygw8-k"/>`,
		"fallback": "griddy-icons:chart-bar-down-alt",
	});
}

export default Component;
