import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m60fi_bcv.css';
import '../../css/a/a814_vg9v.css';
import '../../css/n/nj4qihbbc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m60fi_bcv"/><path class="a814_vg9v"/><path class="nj4qihbbc"/></g>`,
		"fallback": "lucide-extended:chart-bar-stacked-duotone",
	});
}

export default Component;
