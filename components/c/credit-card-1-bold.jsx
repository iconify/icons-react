import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cfl8oab7b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cfl8oab7b"/>`,
		"fallback": "streamline-ultimate:credit-card-1-bold",
	});
}

export default Component;
