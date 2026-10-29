import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/l/lib7csx-h.css';
import '../../css/o/oahhyn08r.css';
import '../../css/i/iypg6nb7m.css';
import '../../css/o/o835oacbz.css';
import '../../css/o/op2j7xbfi.css';
import '../../css/n/nnf7_ofte.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="lib7csx-h wm-deco"/><path class="oahhyn08r wm-deco"/><path class="iypg6nb7m wm-deco"/><path class="o835oacbz wm-k"/><path class="op2j7xbfi wm-a"/><path class="nnf7_ofte wm-k"/></g>`,
		"fallback": "withicons:car-blueprint",
	});
}

export default Component;
