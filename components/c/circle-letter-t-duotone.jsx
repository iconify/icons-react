import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/ceubn5bns.css';
import '../../css/g/gx35_lbkf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ceubn5bns"/><path class="gx35_lbkf"/></g>`,
		"fallback": "lucide-extended:circle-letter-t-duotone",
	});
}

export default Component;
