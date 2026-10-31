import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-j9si9z.css';
import '../../css/q/qn9lrbsql.css';
import '../../css/r/r2ouyrbdu.css';

const viewBox = {"width":301,"height":225};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k5-j9si9z"/><path class="qn9lrbsql"/><path class="r2ouyrbdu"/></g>`,
		"fallback": "cif:ga",
	});
}

export default Component;
