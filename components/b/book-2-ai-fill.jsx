import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zzq729qth.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zzq729qth"/>`,
		"fallback": "mingcute:book-2-ai-fill",
	});
}

export default Component;
