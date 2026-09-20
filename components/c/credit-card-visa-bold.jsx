import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sbwpdobam.css';
import '../../css/d/dww-yjbde.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sbwpdobam"/><path class="dww-yjbde"/>`,
		"fallback": "streamline-ultimate:credit-card-visa-bold",
	});
}

export default Component;
