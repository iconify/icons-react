import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cidnmrdbv.css';
import '../../css/n/neifvedcl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cidnmrdbv"/><path class="neifvedcl"/>`,
		"fallback": "prime:check-square",
	});
}

export default Component;
