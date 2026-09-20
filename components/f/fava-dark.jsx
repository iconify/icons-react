import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w2wxgo90t.css';
import '../../css/b/bo9f9s_he.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w2wxgo90t"/><path class="bo9f9s_he"/>`,
		"fallback": "selfhst:fava-dark",
	});
}

export default Component;
