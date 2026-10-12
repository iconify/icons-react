import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jsuodbc3a.css';
import '../../css/f/fnwqvcbpt.css';
import '../../css/w/woo13zj7m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jsuodbc3a"/><path class="fnwqvcbpt"/><path class="woo13zj7m"/></g>`,
		"fallback": "lucide-extended:book-bookmark-duotone",
	});
}

export default Component;
