import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rew2wgbhk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rew2wgbhk"/>`,
		"fallback": "coolicons:infinity-bulk-round",
	});
}

export default Component;
