import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jhc-ifv-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jhc-ifv-f"/>`,
		"fallback": "iconoir:data-transfer-down",
	});
}

export default Component;
