import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ny93yw8fe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ny93yw8fe"/>`,
		"fallback": "tdesign:component-divider-horizontal-filled",
	});
}

export default Component;
