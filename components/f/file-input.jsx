import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u-97tobaz.css';
import '../../css/v/v1m1uxmtt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="u-97tobaz"/><path class="v1m1uxmtt"/></g>`,
		"fallback": "lucide:file-input",
	});
}

export default Component;
