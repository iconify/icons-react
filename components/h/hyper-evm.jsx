import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oal_t8bht.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oal_t8bht"/>`,
		"fallback": "token:hyper-evm",
	});
}

export default Component;
