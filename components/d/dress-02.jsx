import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wgkkmt-fk.css';
import '../../css/w/wv0iswb5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="wgkkmt-fk"/><path class="wv0iswb5k"/></g>`,
		"fallback": "hugeicons:dress-02",
	});
}

export default Component;
