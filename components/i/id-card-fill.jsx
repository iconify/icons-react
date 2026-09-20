import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ct_lf2gmj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ct_lf2gmj"/>`,
		"fallback": "keyline-icons:id-card-fill",
	});
}

export default Component;
