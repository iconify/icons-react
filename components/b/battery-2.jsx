import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tgmfl_7bz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tgmfl_7bz"/>`,
		"fallback": "pixelarticons:battery-2",
	});
}

export default Component;
