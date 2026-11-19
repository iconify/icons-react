import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j-za1hb4x.css';
import '../../css/u/u5h8llb9a.css';
import '../../css/n/n9yopmb_r.css';
import '../../css/h/hch4jfbgb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="j-za1hb4x"/><path class="u5h8llb9a"/><path class="n9yopmb_r"/><path class="hch4jfbgb"/></g>`,
		"fallback": "andrsrxn:globe-cursor",
	});
}

export default Component;
