import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jiu7-7bly.css';
import '../../css/j/j6kqaz-6z.css';
import '../../css/v/vnofeccxp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jiu7-7bly"/><path class="j6kqaz-6z"/><path class="vnofeccxp"/></g>`,
		"fallback": "tdesign:file-blocked",
	});
}

export default Component;
