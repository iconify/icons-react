import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oz0-7c0kb.css';
import '../../css/j/jf0anfbvm.css';
import '../../css/r/r9l9x_bxp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oz0-7c0kb"/><path class="jf0anfbvm"/><path class="r9l9x_bxp"/>`,
		"fallback": "energy-icons:castle-48-bold",
	});
}

export default Component;
