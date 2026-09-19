import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kvilx1q3c.css';
import '../../css/p/pqwcjgxcc.css';
import '../../css/x/x9ylqsbyh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="kvilx1q3c"><path class="pqwcjgxcc"/><path class="x9ylqsbyh"/></g>`,
		"fallback": "icon-park:book-open",
	});
}

export default Component;
