import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t7go1fb5x.css';
import '../../css/f/fzgjf1dzl.css';
import '../../css/g/g6iekibyn.css';
import '../../css/e/e--upmbom.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="t7go1fb5x"/><path class="fzgjf1dzl"/><path class="g6iekibyn"/><path clip-rule="evenodd" class="e--upmbom"/></g>`,
		"fallback": "streamline-plump-color:cyborg-2-flat",
	});
}

export default Component;
