import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqku5tbty.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hqku5tbty"/>`,
		"fallback": "tabler:capsule-horizontal-filled",
	});
}

export default Component;
