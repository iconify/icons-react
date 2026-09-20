import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-g932nak.css';
import '../../css/p/pt1jbnbuw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f-g932nak"/><path class="pt1jbnbuw"/>`,
		"fallback": "tdesign:file-download-filled",
	});
}

export default Component;
