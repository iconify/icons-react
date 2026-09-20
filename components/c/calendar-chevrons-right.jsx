import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/ja2rfhb2a.css';
import '../../css/a/aovktr3zn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ja2rfhb2a"/><path class="aovktr3zn"/></g>`,
		"fallback": "lucide:calendar-chevrons-right",
	});
}

export default Component;
