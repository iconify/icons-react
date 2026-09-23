import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cxrv3d63f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cxrv3d63f"/>`,
		"fallback": "keyline-icons:corner-left-down",
	});
}

export default Component;
