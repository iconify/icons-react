import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xpkopwb9t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xpkopwb9t"/>`,
		"fallback": "tdesign:earphone-filled",
	});
}

export default Component;
