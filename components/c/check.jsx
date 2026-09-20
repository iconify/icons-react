import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/psr1a-bkx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="psr1a-bkx"/>`,
		"fallback": "streamline-sharp:check",
	});
}

export default Component;
