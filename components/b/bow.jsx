import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/egb_ddg7c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="egb_ddg7c"/>`,
		"fallback": "boxicons:bow",
	});
}

export default Component;
