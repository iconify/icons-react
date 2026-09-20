import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv9eqyb1j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sv9eqyb1j"/>`,
		"fallback": "tdesign:filter-clear-filled",
	});
}

export default Component;
