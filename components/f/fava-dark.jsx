import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w2wxgo90t.css';
import '../../css/e/efcj-jnsz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w2wxgo90t"/><path class="efcj-jnsz"/>`,
		"fallback": "selfhst:fava-dark",
	});
}

export default Component;
