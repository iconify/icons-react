import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/thzgjtb1r.css';
import '../../css/x/x7s3ef7xj.css';
import '../../css/f/f2_p00lwq.css';
import '../../css/d/d67rd9bsz.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="thzgjtb1r"/><path class="x7s3ef7xj"/><path class="f2_p00lwq"/><path class="d67rd9bsz"/></g>`,
		"fallback": "glyphs:check-double-outline",
	});
}

export default Component;
