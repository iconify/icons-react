import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l8ivs9bqv.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gu7tsdzwi.css';
import '../../css/h/httstt_8v.css';
import '../../css/e/ec02wkbwh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVG9mmdqcjr" class="l8ivs9bqv"/></defs><g class="cuyn6tgcc"><path clip-rule="evenodd" class="gu7tsdzwi"/><g clip-rule="evenodd" class="httstt_8v"><use href="#SVG9mmdqcjr"/><use href="#SVG9mmdqcjr"/></g><path class="ec02wkbwh"/></g>`,
		"fallback": "reicon:house-duotone",
	});
}

export default Component;
