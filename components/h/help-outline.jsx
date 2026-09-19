import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mxt8ivbsc.css';
import '../../css/c/ckqvl2v2i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mxt8ivbsc"/><circle class="ckqvl2v2i"/>`,
		"fallback": "famicons:help-outline",
	});
}

export default Component;
