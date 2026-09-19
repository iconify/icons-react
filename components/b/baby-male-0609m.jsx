import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uq3_6fb4a.css';
import '../../css/t/tyf8kebgy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="uq3_6fb4a"/><path clip-rule="evenodd" class="tyf8kebgy"/></g>`,
		"fallback": "healthicons:baby-male-0609m",
	});
}

export default Component;
