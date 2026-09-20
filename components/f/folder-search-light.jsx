import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/h/heqtmdb8h.css';
import '../../css/p/pm27xrbad.css';
import '../../css/r/r0cxtj73q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="heqtmdb8h"/><circle class="pm27xrbad"/><path class="r0cxtj73q"/></g>`,
		"fallback": "lets-icons:folder-search-light",
	});
}

export default Component;
