import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/feh3568qk.css';
import '../../css/s/se175u0vt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="feh3568qk"/><path clip-rule="evenodd" class="se175u0vt"/>`,
		"fallback": "ix:aas-shell-search-filled",
	});
}

export default Component;
