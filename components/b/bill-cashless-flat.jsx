import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yszczrbew.css';
import '../../css/l/ljqd0enry.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yszczrbew"/><path clip-rule="evenodd" class="ljqd0enry"/></g>`,
		"fallback": "streamline-color:bill-cashless-flat",
	});
}

export default Component;
