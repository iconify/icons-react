import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rcuc6fbtx.css';
import '../../css/t/tr1yy1b0h.css';
import '../../css/a/ao630jb1n.css';
import '../../css/j/j5p651bbv.css';
import '../../css/b/b2vpz7b9s.css';
import '../../css/u/umdyk_b7u.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rcuc6fbtx"/><path class="tr1yy1b0h"/><path class="ao630jb1n"/><path class="j5p651bbv"/><path class="b2vpz7b9s"/><path class="umdyk_b7u"/>`,
		"fallback": "energy-icons:e-bike-20-bold",
	});
}

export default Component;
