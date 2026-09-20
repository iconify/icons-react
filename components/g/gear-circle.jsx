import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/csha0-byu.css';
import '../../css/b/b7madzw7f.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="csha0-byu"/><path class="b7madzw7f"/><path class="xrgx2dblx"/></g>`,
		"fallback": "pepicons-pencil:gear-circle",
	});
}

export default Component;
