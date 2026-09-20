import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ybk7p_byn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ybk7p_byn"/>`,
		"fallback": "tdesign:castle-7-filled",
	});
}

export default Component;
