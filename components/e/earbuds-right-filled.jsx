import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/ruirgp1mv.css';
import '../../css/c/cac2avbop.css';
import '../../css/k/ka3skv-fj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ruirgp1mv"/><path class="cac2avbop"/><path clip-rule="evenodd" class="ka3skv-fj"/></g>`,
		"fallback": "reicon:earbuds-right-filled",
	});
}

export default Component;
