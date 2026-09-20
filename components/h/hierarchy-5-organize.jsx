import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mjeqn425j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mjeqn425j"/>`,
		"fallback": "streamline-ultimate:hierarchy-5-organize",
	});
}

export default Component;
