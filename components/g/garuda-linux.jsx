import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iy05w96zg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iy05w96zg"/>`,
		"fallback": "thesvg-color:garuda-linux",
	});
}

export default Component;
