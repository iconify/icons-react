import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/srd3wb14f.css';
import '../../css/l/l9a1-gjkh.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="srd3wb14f"/><circle class="l9a1-gjkh"/></g>`,
		"fallback": "garden:customize-26",
	});
}

export default Component;
