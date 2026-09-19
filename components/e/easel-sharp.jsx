import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jyy3z6b2h.css';
import '../../css/b/b0bieq5rt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jyy3z6b2h"/><path class="b0bieq5rt"/>`,
		"fallback": "famicons:easel-sharp",
	});
}

export default Component;
