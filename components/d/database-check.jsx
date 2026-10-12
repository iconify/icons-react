import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pd3w4vb1f.css';
import '../../css/c/c03nhl43h.css';
import '../../css/j/jiu158igz.css';
import '../../css/u/u3l80fs-u.css';
import '../../css/g/g647bbcls.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><ellipse transform="rotate(-180 12 5.23)" class="pd3w4vb1f"/><path class="c03nhl43h"/><ellipse transform="rotate(-180 12 5.23)" class="jiu158igz"/><path class="u3l80fs-u"/><path class="g647bbcls"/></g>`,
		"fallback": "andrsrxn:database-check",
	});
}

export default Component;
