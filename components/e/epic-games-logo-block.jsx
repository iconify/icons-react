import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mjte8zblv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mjte8zblv"/>`,
		"fallback": "streamline-logos:epic-games-logo-block",
	});
}

export default Component;
