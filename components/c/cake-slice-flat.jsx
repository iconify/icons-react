import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a56cztbtr.css';
import '../../css/z/z7lpwabnn.css';
import '../../css/u/ucqslmf0g.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="a56cztbtr"/><path class="z7lpwabnn"/><path class="ucqslmf0g"/></g>`,
		"fallback": "streamline-color:cake-slice-flat",
	});
}

export default Component;
