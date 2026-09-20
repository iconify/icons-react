import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_d2ngb8m.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k_d2ngb8m"/>`,
		"fallback": "streamline-block:control-buttons-record",
	});
}

export default Component;
