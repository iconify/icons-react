import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/doqm4e-nu.css';
import '../../css/s/slcgv9bsj.css';
import '../../css/r/r726-2bju.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="doqm4e-nu"/><path class="slcgv9bsj"/><path class="r726-2bju"/></g>`,
		"fallback": "lucide-extended:chart-column-big-duotone",
	});
}

export default Component;
