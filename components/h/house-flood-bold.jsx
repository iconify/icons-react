import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zk8im-d8t.css';
import '../../css/t/tfftvkwws.css';
import '../../css/v/vbacm0bcs.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="zk8im-d8t"/><path class="tfftvkwws"/><path class="vbacm0bcs"/></g>`,
		"fallback": "glyphs:house-flood-bold",
	});
}

export default Component;
