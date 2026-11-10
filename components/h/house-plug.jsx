import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d-zgppq4g.css';
import '../../css/l/lh0hynewh.css';
import '../../css/f/f818o7kkd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="d-zgppq4g"/><path class="lh0hynewh"/><path class="f818o7kkd"/></g>`,
		"fallback": "andrsrxn:house-plug",
	});
}

export default Component;
