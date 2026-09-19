import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/q0egn3lpb.css';
import '../../css/n/n4c156o6c.css';
import '../../css/d/dq5gb0bhx.css';
import '../../css/r/r6s6x5bkn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><g transform="translate(2 1)"><ellipse class="q0egn3lpb"/><path class="n4c156o6c"/></g><path class="dq5gb0bhx"/><path class="r6s6x5bkn"/></g>`,
		"fallback": "si-glyph:database-upload",
	});
}

export default Component;
