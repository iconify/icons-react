import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/v/v1kv4f3wb.css';
import '../../css/n/ni8xmk99j.css';
import '../../css/s/si2jfabzm.css';
import '../../css/z/zt1e34j_a.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="v1kv4f3wb"/><path class="ni8xmk99j"/><path class="si2jfabzm"/><path class="zt1e34j_a"/></g>`,
		"fallback": "glyphs:grin-stars-outline",
	});
}

export default Component;
