import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l7-vabcui.css';
import '../../css/l/lzgw9v0ff.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l7-vabcui"/><path class="lzgw9v0ff"/></g>`,
		"fallback": "streamline-color:heading-3-paragraph-styles-heading-flat",
	});
}

export default Component;
