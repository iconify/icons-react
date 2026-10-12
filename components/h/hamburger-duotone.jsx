import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j3y_v82fv.css';
import '../../css/n/nfz4ezbek.css';
import '../../css/r/r-r1vybtq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j3y_v82fv"/><path class="nfz4ezbek"/><path class="r-r1vybtq"/></g>`,
		"fallback": "lucide-extended:hamburger-duotone",
	});
}

export default Component;
