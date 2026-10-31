import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/o/o7xf-vq8o.css';
import '../../css/b/b-i9qebda.css';
import '../../css/a/ay4jhccad.css';
import '../../css/z/zb7hd3b5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="o7xf-vq8o wm-shadow"/><path class="b-i9qebda wm-shadow"/><path class="ay4jhccad"/><path class="zb7hd3b5e"/></g>`,
		"fallback": "withicons-brutal:case-sensitive",
	});
}

export default Component;
