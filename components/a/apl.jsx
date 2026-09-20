import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gufcdpbgn.css';
import '../../css/o/oxn1-zbqv.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gufcdpbgn"/><path class="oxn1-zbqv"/>`,
		"fallback": "thesvg-color:apl",
	});
}

export default Component;
