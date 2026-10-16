import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/itm5al3co.css';
import '../../css/t/tytsexmko.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="itm5al3co"/><path clip-rule="evenodd" class="tytsexmko"/></g>`,
		"fallback": "gravity-ui:circle-number-9-fill",
	});
}

export default Component;
