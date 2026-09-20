import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cj0gtbbaz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cj0gtbbaz"/>`,
		"fallback": "streamline-logos:facebook-logo-1",
	});
}

export default Component;
