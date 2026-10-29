import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/ljdnzhb7i.css';
import '../../css/i/i0euaobek.css';
import '../../css/c/ciy208bii.css';
import '../../css/j/j9ot3x1rq.css';
import '../../css/y/y5dde6imt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ljdnzhb7i wm-deco"/><path class="i0euaobek wm-k"/><path class="ciy208bii wm-k"/><path class="j9ot3x1rq wm-k"/><path class="wm-shine y5dde6imt"/></g>`,
		"fallback": "withicons-anime:arrow-up-left",
	});
}

export default Component;
