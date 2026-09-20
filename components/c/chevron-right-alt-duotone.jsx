import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ed_ztubpb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ed_ztubpb"/>`,
		"fallback": "si:chevron-right-alt-duotone",
	});
}

export default Component;
