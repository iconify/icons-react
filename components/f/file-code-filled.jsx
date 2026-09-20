import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rj8qivbuk.css';
import '../../css/o/o3q91_but.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rj8qivbuk"/><path class="o3q91_but"/>`,
		"fallback": "tdesign:file-code-filled",
	});
}

export default Component;
