import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jc2c4kgmk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jc2c4kgmk"/>`,
		"fallback": "pixelarticons:brackets-content",
	});
}

export default Component;
