import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wdwo28b7p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wdwo28b7p"/>`,
		"fallback": "thesvg:cd-projekt",
	});
}

export default Component;
