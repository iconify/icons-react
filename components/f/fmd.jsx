import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jeyfkhb4r.css';
import '../../css/t/t7d2d5bdd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jeyfkhb4r"/><path class="t7d2d5bdd"/>`,
		"fallback": "selfhst:fmd",
	});
}

export default Component;
