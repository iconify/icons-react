import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o0wj9dbuw.css';
import '../../css/u/u854if6zd.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o0wj9dbuw"/><path clip-rule="evenodd" class="u854if6zd"/></g>`,
		"fallback": "streamline-color:gameboy-flat",
	});
}

export default Component;
