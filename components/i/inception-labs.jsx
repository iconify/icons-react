import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ijn9g66do.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ijn9g66do"/>`,
		"fallback": "thesvg:inception-labs",
	});
}

export default Component;
