import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j9f-drbyf.css';
import '../../css/c/cuy5_7bkw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j9f-drbyf"/><path clip-rule="evenodd" class="cuy5_7bkw"/></g>`,
		"fallback": "streamline-plump-color:bag-flat",
	});
}

export default Component;
