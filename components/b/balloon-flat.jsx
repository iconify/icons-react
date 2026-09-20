import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m1u3qk9bj.css';
import '../../css/a/a4ppuf7an.css';
import '../../css/j/j99jrbj5x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="m1u3qk9bj"/><path class="a4ppuf7an"/><path clip-rule="evenodd" class="j99jrbj5x"/></g>`,
		"fallback": "streamline-plump-color:balloon-flat",
	});
}

export default Component;
