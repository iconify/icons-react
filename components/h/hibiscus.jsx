import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k727c1bes.css';
import '../../css/p/p-ehit_wl.css';
import '../../css/r/r_28-d6jk.css';
import '../../css/o/owko1921z.css';
import '../../css/f/fkzu1lbzu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k727c1bes"/><path class="p-ehit_wl"/><path class="r_28-d6jk"/><path class="owko1921z"/><path class="fkzu1lbzu"/>`,
		"fallback": "fxemoji:hibiscus",
	});
}

export default Component;
