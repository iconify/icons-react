import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iif_9hzvg.css';
import '../../css/k/klfo1ab7t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iif_9hzvg"/><path class="klfo1ab7t"/>`,
		"fallback": "boxicons:enterprise",
	});
}

export default Component;
