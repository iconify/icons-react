import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vy_akccwx.css';
import '../../css/k/kohszfbex.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vy_akccwx"/><path class="kohszfbex"/>`,
		"fallback": "lucide-extended:funnel-x-filled",
	});
}

export default Component;
