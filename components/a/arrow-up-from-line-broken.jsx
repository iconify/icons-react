import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/p-1nc6b6p.css';
import '../../css/n/n-e1qqb_j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="p-1nc6b6p"/><path class="n-e1qqb_j"/></g>`,
		"fallback": "solar:arrow-up-from-line-broken",
	});
}

export default Component;
