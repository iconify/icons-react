import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kzhos931o.css';
import '../../css/w/wjcjnmb0r.css';
import '../../css/d/doj9dq_jg.css';
import '../../css/s/susxgukgt.css';
import '../../css/c/cz7q87nyz.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kzhos931o"/><path class="wjcjnmb0r"/><g class="doj9dq_jg"><path class="susxgukgt"/><path class="cz7q87nyz"/></g>`,
		"fallback": "openmoji:cloud-with-lightning",
	});
}

export default Component;
