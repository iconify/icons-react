import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/p/p94_bsqsn.css';
import '../../css/s/s4tzz1xjy.css';
import '../../css/k/k7i5r8b-m.css';
import '../../css/b/buvterbpv.css';
import '../../css/v/v6a9_t-6q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="p94_bsqsn"/><path class="s4tzz1xjy"/><path class="k7i5r8b-m"/><path class="buvterbpv"/><path class="v6a9_t-6q"/></g>`,
		"fallback": "streamline-freehand-color:donation-charity-donate-bag-2",
	});
}

export default Component;
