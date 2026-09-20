import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/ncc0iab_f.css';
import '../../css/e/e_nr_ib2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ncc0iab_f"/><path class="e_nr_ib2t"/></g>`,
		"fallback": "mynaui:building",
	});
}

export default Component;
