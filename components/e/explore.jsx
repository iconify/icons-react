import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v8qbl6pto.css';
import '../../css/j/jqzw1jyrf.css';
import '../../css/d/dyv0-6b8k.css';
import '../../css/a/a-sbwqb9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v8qbl6pto"/><path class="jqzw1jyrf"/><path class="dyv0-6b8k"/><path class="a-sbwqb9z"/></g>`,
		"fallback": "tdesign:explore",
	});
}

export default Component;
