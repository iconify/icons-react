import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m1_dzw0-a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m1_dzw0-a"/>`,
		"fallback": "ri:folder-music-line",
	});
}

export default Component;
