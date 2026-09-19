import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/n/nmhza9kvd.css';
import '../../css/a/ah73_jbsa.css';
import '../../css/k/knu-zc89h.css';
import '../../css/l/lqyxesv5t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="nmhza9kvd"/><path class="ah73_jbsa"/><path class="knu-zc89h"/><path class="lqyxesv5t"/></g>`,
		"fallback": "hugeicons:clubs-01",
	});
}

export default Component;
