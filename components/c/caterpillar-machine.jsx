import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/h5hjglbxc.css';
import '../../css/a/adlxbhb-f.css';
import '../../css/z/zf72vn14r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="h5hjglbxc"/><path class="adlxbhb-f"/><path class="zf72vn14r"/></g>`,
		"fallback": "si-glyph:caterpillar-machine",
	});
}

export default Component;
