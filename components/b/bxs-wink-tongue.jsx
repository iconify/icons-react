import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pstg2i40z.css';
import '../../css/r/r3j7g_mer.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pstg2i40z"/><path class="r3j7g_mer"/>`,
		"fallback": "bx:bxs-wink-tongue",
	});
}

export default Component;
