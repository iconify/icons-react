import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w2emkyb0z.css';
import '../../css/e/eg843s-3q.css';
import '../../css/b/bm7srd-6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w2emkyb0z"/><path class="eg843s-3q"/><path class="bm7srd-6b"/>`,
		"fallback": "solar:code-bold-duotone",
	});
}

export default Component;
