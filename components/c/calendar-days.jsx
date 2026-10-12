import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z9vtkrbdu.css';
import '../../css/u/uo2ylvp5t.css';
import '../../css/r/rkgl6objd.css';
import '../../css/x/x4ihxui-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="z9vtkrbdu"/><rect class="uo2ylvp5t"/><path class="rkgl6objd"/><path class="x4ihxui-o"/></g>`,
		"fallback": "andrsrxn:calendar-days",
	});
}

export default Component;
