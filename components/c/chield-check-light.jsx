import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/y/yttikob1w.css';
import '../../css/b/bhtuczb_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="yttikob1w"/><path class="bhtuczb_t"/></g>`,
		"fallback": "lets-icons:chield-check-light",
	});
}

export default Component;
