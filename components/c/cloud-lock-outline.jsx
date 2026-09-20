import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rn45hr9iw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rn45hr9iw"/>`,
		"fallback": "mdi:cloud-lock-outline",
	});
}

export default Component;
