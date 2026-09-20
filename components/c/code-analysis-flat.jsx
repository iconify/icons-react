import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e9wex4b8f.css';
import '../../css/i/itd13quck.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e9wex4b8f"/><path clip-rule="evenodd" class="itd13quck"/></g>`,
		"fallback": "streamline-color:code-analysis-flat",
	});
}

export default Component;
