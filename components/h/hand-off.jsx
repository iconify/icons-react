import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lwnu7_wox.css';
import '../../css/g/gfnynmb6w.css';
import '../../css/k/k2ivq4bxp.css';
import '../../css/i/iov7g9bby.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lwnu7_wox"/><path class="gfnynmb6w"/><path class="k2ivq4bxp"/><path class="iov7g9bby"/></g>`,
		"fallback": "andrsrxn:hand-off",
	});
}

export default Component;
