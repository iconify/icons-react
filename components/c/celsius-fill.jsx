import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ck_fmlq6i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ck_fmlq6i"/>`,
		"fallback": "mingcute:celsius-fill",
	});
}

export default Component;
