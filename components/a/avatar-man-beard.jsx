import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/y1s8_-93b.css';
import '../../css/s/szyp9mbva.css';
import '../../css/b/baoogbiqr.css';
import '../../css/z/zgjshfhxk.css';
import '../../css/o/o_yfqzfoz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="y1s8_-93b"/><path class="szyp9mbva"/><path class="baoogbiqr"/><path class="zgjshfhxk"/><path class="o_yfqzfoz"/></g>`,
		"fallback": "withicons-bauhaus:avatar-man-beard",
	});
}

export default Component;
