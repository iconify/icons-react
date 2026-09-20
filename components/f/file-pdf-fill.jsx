import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jliau-b2s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jliau-b2s"/>`,
		"fallback": "ri:file-pdf-fill",
	});
}

export default Component;
