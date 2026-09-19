import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w22f1_bsl.css';
import '../../css/c/cyx6qvb9e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w22f1_bsl"/><path class="cyx6qvb9e"/>`,
		"fallback": "cil:clipboard",
	});
}

export default Component;
