import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ollll1rvu.css';
import '../../css/s/ssk_xhn8f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ollll1rvu"/><path class="ssk_xhn8f"/>`,
		"fallback": "cil:flower",
	});
}

export default Component;
