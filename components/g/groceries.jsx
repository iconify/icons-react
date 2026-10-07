import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/ch54c-bxk.css';
import '../../css/x/xujwraclm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ch54c-bxk"/><path class="xujwraclm"/></g>`,
		"fallback": "lucide:groceries",
	});
}

export default Component;
