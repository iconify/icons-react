import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z39aadbnl.css';
import '../../css/z/zqfkw8b6a.css';
import '../../css/j/jm99s1zdo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="z39aadbnl"/><path class="zqfkw8b6a"/><path class="jm99s1zdo"/></g>`,
		"fallback": "andrsrxn:brick",
	});
}

export default Component;
