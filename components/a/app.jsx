import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lex9-t1xs.css';
import '../../css/n/nu87m9_5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lex9-t1xs"/><path class="nu87m9_5n"/></g>`,
		"fallback": "tdesign:app",
	});
}

export default Component;
