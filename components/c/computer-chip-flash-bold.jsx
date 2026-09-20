import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t4qw2cbsy.css';
import '../../css/k/k_r5mab3t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t4qw2cbsy"/><path class="k_r5mab3t"/>`,
		"fallback": "streamline-ultimate:computer-chip-flash-bold",
	});
}

export default Component;
