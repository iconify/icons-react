import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ntgjpac6f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ntgjpac6f"/>`,
		"fallback": "tabler:device-mobile-down",
	});
}

export default Component;
