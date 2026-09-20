import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xxcb1mbaj.css';
import '../../css/o/oy1u-_wig.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xxcb1mbaj"/><path class="oy1u-_wig"/></g>`,
		"fallback": "keyline-icons:file-spreadsheet-duotone",
	});
}

export default Component;
