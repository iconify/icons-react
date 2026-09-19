import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/chl7dpbpn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="chl7dpbpn"/>`,
		"fallback": "fe:folder-open",
	});
}

export default Component;
