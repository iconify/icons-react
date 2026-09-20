import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xh2xd8hhg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xh2xd8hhg"/>`,
		"fallback": "streamline-sharp:forward-email",
	});
}

export default Component;
