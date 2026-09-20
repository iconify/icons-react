import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u7cmrhb3o.css';
import '../../css/w/ww27481bp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u7cmrhb3o"/><path class="ww27481bp"/></g>`,
		"fallback": "streamline-color:file-delete-alternate",
	});
}

export default Component;
