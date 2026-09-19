import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nctb2ac4r.css';
import '../../css/y/yjhe5cblo.css';
import '../../css/t/tg8g8nbhv.css';
import '../../css/w/wk3502b3y.css';
import '../../css/g/g-e5rtnbn.css';
import '../../css/d/d4p0p4bla.css';
import '../../css/w/w5j4y0brf.css';
import '../../css/w/wtr230m8l.css';
import '../../css/j/jbcl06q2g.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="nctb2ac4r"><path class="yjhe5cblo"/><path clip-rule="evenodd" class="tg8g8nbhv"/><path class="wk3502b3y"/><path clip-rule="evenodd" class="g-e5rtnbn"/><path clip-rule="evenodd" class="d4p0p4bla"/></g><path clip-rule="evenodd" class="w5j4y0brf"/><path clip-rule="evenodd" class="wtr230m8l"/><path clip-rule="evenodd" class="jbcl06q2g"/></g>`,
		"fallback": "pepicons:hourglass-print",
	});
}

export default Component;
