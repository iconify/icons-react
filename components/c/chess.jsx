import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/e/e6n0nqbaa.css';
import '../../css/n/nop7pgkob.css';
import '../../css/b/bzj7n2bvd.css';
import '../../css/w/wk1rtzb9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="e6n0nqbaa wm-shadow"/><path class="nop7pgkob wm-shadow"/><path class="bzj7n2bvd"/><path class="wk1rtzb9d"/></g>`,
		"fallback": "withicons-brutal:chess",
	});
}

export default Component;
