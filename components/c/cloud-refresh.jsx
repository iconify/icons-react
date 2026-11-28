import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dgvyovbtr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dgvyovbtr"/>`,
		"fallback": "noviair-light:cloud-refresh",
	});
}

export default Component;
