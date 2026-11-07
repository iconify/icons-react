import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s47kc73dd.css';
import '../../css/h/h89wykbwy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s47kc73dd"/><path class="h89wykbwy"/>`,
		"fallback": "solar:chevron-last-outline",
	});
}

export default Component;
