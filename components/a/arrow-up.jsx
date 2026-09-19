import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xo1wz-2dn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xo1wz-2dn"/>`,
		"fallback": "heroicons:arrow-up",
	});
}

export default Component;
