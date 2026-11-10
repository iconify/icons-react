import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/ff0nyrbgo.css';
import '../../css/b/bk2awyw2k.css';
import '../../css/g/gsvrl7yuk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ff0nyrbgo"/><path class="bk2awyw2k"/><path class="gsvrl7yuk"/></g>`,
		"fallback": "andrsrxn:house-star",
	});
}

export default Component;
