import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b4otipb9t.css';
import '../../css/x/xk4jj77ja.css';
import '../../css/d/d6no5xmhq.css';
import '../../css/g/gn83ckbub.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b4otipb9t"/><path class="xk4jj77ja"/><path class="d6no5xmhq"/><path class="gn83ckbub"/></g>`,
		"fallback": "andrsrxn:background-sparkle",
	});
}

export default Component;
