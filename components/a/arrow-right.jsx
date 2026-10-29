import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i52o7bbpp.css';
import '../../css/t/tpmoddcaw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i52o7bbpp wm-k"/><path class="tpmoddcaw wm-a"/>`,
		"fallback": "withicons-bauhaus:arrow-right",
	});
}

export default Component;
