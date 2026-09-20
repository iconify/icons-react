import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lfdhb-19z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lfdhb-19z"/>`,
		"fallback": "streamline-ultimate:arrow-thick-right-bottom-corner-3",
	});
}

export default Component;
