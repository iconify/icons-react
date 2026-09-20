import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/e/epfjlqt3c.css';
import '../../css/t/ts8f-kynr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="epfjlqt3c"/><path class="ts8f-kynr"/></g>`,
		"fallback": "streamline-color:hard-disk-flat",
	});
}

export default Component;
