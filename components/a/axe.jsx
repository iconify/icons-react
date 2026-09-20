import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rg8u0-b0d.css';
import '../../css/a/ampzx7bne.css';
import '../../css/x/x3xi03bfx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="rg8u0-b0d"/><path class="ampzx7bne"/><path class="x3xi03bfx"/></g>`,
		"fallback": "vadivam:axe",
	});
}

export default Component;
