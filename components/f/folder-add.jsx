import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ef7iwcbpf.css';
import '../../css/v/v0hgip5gz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ef7iwcbpf"/><path class="v0hgip5gz"/></g>`,
		"fallback": "streamline-color:folder-add",
	});
}

export default Component;
