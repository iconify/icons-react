import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dsf8c2b6f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dsf8c2b6f"/>`,
		"fallback": "keyline-icons:fullscreen-exit",
	});
}

export default Component;
