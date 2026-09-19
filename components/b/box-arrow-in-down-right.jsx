import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/bo0ecac6x.css';
import '../../css/k/kzkvied5v.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="bo0ecac6x"/><path class="kzkvied5v"/></g>`,
		"fallback": "bi:box-arrow-in-down-right",
	});
}

export default Component;
