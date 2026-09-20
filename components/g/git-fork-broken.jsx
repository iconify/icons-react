import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/f8m9b9b9z.css';
import '../../css/f/fn1p5fm9f.css';
import '../../css/x/x1se1px2n.css';
import '../../css/i/i3ie3ccuz.css';
import '../../css/r/r50xlibql.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="f8m9b9b9z"/><path class="fn1p5fm9f"/><path class="x1se1px2n"/><path class="i3ie3ccuz"/><path class="r50xlibql"/></g>`,
		"fallback": "solar:git-fork-broken",
	});
}

export default Component;
