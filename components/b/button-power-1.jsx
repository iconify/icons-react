import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sa05xqbmd.css';
import '../../css/a/apvh44b9e.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sa05xqbmd"/><path class="apvh44b9e"/></g>`,
		"fallback": "streamline-flex-color:button-power-1",
	});
}

export default Component;
