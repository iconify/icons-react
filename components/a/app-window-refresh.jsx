import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xb-1k-83z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xb-1k-83z"/>`,
		"fallback": "noviair:app-window-refresh",
	});
}

export default Component;
