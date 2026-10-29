import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/t/tnsdjoz2v.css';
import '../../css/y/y1yeo1vat.css';
import '../../css/a/a2qsicn0m.css';
import '../../css/p/pw12eebpd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="tnsdjoz2v wm-deco"/><path class="wm-deco y1yeo1vat"/><path class="a2qsicn0m"/><path class="pw12eebpd"/></g>`,
		"fallback": "withicons:chevron-right-blueprint",
	});
}

export default Component;
