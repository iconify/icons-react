import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nvyw8shky.css';
import '../../css/s/si38sl8xh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nvyw8shky"/><path class="si38sl8xh"/>`,
		"fallback": "boxicons:church",
	});
}

export default Component;
