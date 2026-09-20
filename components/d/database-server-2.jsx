import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aejhl3bve.css';
import '../../css/n/npahmybzw.css';
import '../../css/w/ws0pfhb_f.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="aejhl3bve"/><path class="npahmybzw"/><path class="ws0pfhb_f"/></g>`,
		"fallback": "streamline-color:database-server-2",
	});
}

export default Component;
