import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vp-2r9b0v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vp-2r9b0v"/>`,
		"fallback": "streamline-plump:airport-security-remix",
	});
}

export default Component;
