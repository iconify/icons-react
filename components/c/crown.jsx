import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ceu87zb9i.css';
import '../../css/u/uwvn7obqq.css';
import '../../css/b/buhkhbh6c.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ceu87zb9i"/><path class="uwvn7obqq"/><path class="buhkhbh6c"/>`,
		"fallback": "fxemoji:crown",
	});
}

export default Component;
