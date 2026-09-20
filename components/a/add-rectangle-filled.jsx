import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/swmkr_xua.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="swmkr_xua"/>`,
		"fallback": "tdesign:add-rectangle-filled",
	});
}

export default Component;
