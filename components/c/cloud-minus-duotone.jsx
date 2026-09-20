import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/ba8lvwbib.css';
import '../../css/f/fmuqr9b0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ba8lvwbib"/><path class="fmuqr9b0o"/>`,
		"fallback": "stash:cloud-minus-duotone",
	});
}

export default Component;
