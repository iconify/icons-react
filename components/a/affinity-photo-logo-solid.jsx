import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t3b_m5t_k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t3b_m5t_k"/>`,
		"fallback": "streamline-logos:affinity-photo-logo-solid",
	});
}

export default Component;
