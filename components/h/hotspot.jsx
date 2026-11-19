import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/ja9hnlcji.css';
import '../../css/g/gygftbb3e.css';
import '../../css/s/sklpvw9aq.css';
import '../../css/s/sz8f-fb1v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ja9hnlcji"/><path class="gygftbb3e"/><path class="sklpvw9aq"/><path class="sz8f-fb1v"/></g>`,
		"fallback": "andrsrxn:hotspot",
	});
}

export default Component;
