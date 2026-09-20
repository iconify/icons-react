import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b14kaei-j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b14kaei-j"/>`,
		"fallback": "mage:check-circle-fill",
	});
}

export default Component;
