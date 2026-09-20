import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w9jvul8en.css';
import '../../css/w/wi2-9mbmf.css';
import '../../css/l/l6a3mob9c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="w9jvul8en"/><path class="wi2-9mbmf"/><path class="l6a3mob9c"/></g>`,
		"fallback": "lets-icons:book-duotone",
	});
}

export default Component;
