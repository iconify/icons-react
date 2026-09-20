import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zexsqu_kv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zexsqu_kv"/>`,
		"fallback": "ri:global-off-line",
	});
}

export default Component;
