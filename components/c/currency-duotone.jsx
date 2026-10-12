import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rrk1nfbye.css';
import '../../css/a/as_zecc1v.css';
import '../../css/c/cy496ybdm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rrk1nfbye"/><path class="as_zecc1v"/><path class="cy496ybdm"/></g>`,
		"fallback": "lucide-extended:currency-duotone",
	});
}

export default Component;
