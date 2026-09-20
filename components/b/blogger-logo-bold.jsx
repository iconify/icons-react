import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bkw77b62j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bkw77b62j"/>`,
		"fallback": "streamline-ultimate:blogger-logo-bold",
	});
}

export default Component;
