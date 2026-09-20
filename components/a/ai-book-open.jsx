import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ni1ex1sbr.css';
import '../../css/l/ldpo4n3qb.css';
import '../../css/u/ubtuxebtt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ni1ex1sbr"/><path class="ldpo4n3qb"/><path class="ubtuxebtt"/></g>`,
		"fallback": "tdesign:ai-book-open",
	});
}

export default Component;
