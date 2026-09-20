import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/npcm4-44i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="npcm4-44i"/>`,
		"fallback": "thesvg:china-southern-airlines",
	});
}

export default Component;
