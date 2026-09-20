import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ei_iqhb8u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ei_iqhb8u"/>`,
		"fallback": "streamline-plump:dropbox-logo-remix",
	});
}

export default Component;
