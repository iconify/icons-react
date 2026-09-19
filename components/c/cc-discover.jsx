import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fx3a9x_sb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fx3a9x_sb"/>`,
		"fallback": "cib:cc-discover",
	});
}

export default Component;
