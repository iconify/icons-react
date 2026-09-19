import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oanleacgm.css';
import '../../css/o/opsmh7beo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oanleacgm"/><path class="opsmh7beo"/>`,
		"fallback": "cil:backspace",
	});
}

export default Component;
