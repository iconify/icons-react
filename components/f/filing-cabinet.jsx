import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lp1ryobsr.css';
import '../../css/u/u_kq-l1-a.css';
import '../../css/r/roc87nu7p.css';
import '../../css/w/w27m-bc4p.css';
import '../../css/r/rx-xzbles.css';
import '../../css/i/i5oz8ci3g.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="lp1ryobsr"/><path class="u_kq-l1-a"/><path class="roc87nu7p"/><path clip-rule="evenodd" class="w27m-bc4p"/><path class="rx-xzbles"/><path class="i5oz8ci3g"/></g>`,
		"fallback": "glyphs-poly:filing-cabinet",
	});
}

export default Component;
