import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rngfsdb_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rngfsdb_y"/>`,
		"fallback": "streamline-logos:bbc-iplayer-logo-2",
	});
}

export default Component;
