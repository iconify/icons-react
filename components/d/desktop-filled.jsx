import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/an2x7zf5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="an2x7zf5p"/>`,
		"fallback": "tdesign:desktop-filled",
	});
}

export default Component;
