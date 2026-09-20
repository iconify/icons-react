import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/icy1mzy8b.css';
import '../../css/r/ru9avd0-t.css';
import '../../css/y/y73n-0gfr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="icy1mzy8b"/><path class="ru9avd0-t"/><path class="y73n-0gfr"/>`,
		"fallback": "token:epik",
	});
}

export default Component;
