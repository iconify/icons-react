import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b_89-rk9c.css';
import '../../css/b/b344efb6w.css';
import '../../css/x/xlm72rbvw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b_89-rk9c"/><path class="b344efb6w"/><path class="xlm72rbvw"/></g>`,
		"fallback": "streamline-color:book-reading",
	});
}

export default Component;
