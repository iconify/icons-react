import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bms8p0b3r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bms8p0b3r"/>`,
		"fallback": "tdesign:dam-1-filled",
	});
}

export default Component;
