import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/g1ytquk1o.css';
import '../../css/u/u4_5nh98c.css';
import '../../css/i/itstwccjg.css';
import '../../css/r/rqq5urb9u.css';
import '../../css/d/damlddb8q.css';
import '../../css/l/lrcyu4bmm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="g1ytquk1o wm-shadow"/><path class="u4_5nh98c"/><path class="itstwccjg"/><path class="rqq5urb9u"/><path class="damlddb8q"/><path class="lrcyu4bmm"/></g>`,
		"fallback": "withicons-retro:dental-chair",
	});
}

export default Component;
