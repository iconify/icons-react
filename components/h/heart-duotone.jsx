import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pp7gobvlg.css';
import '../../css/w/wur5sk_cm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pp7gobvlg"/><path class="wur5sk_cm"/></g>`,
		"fallback": "lucide-extended:heart-duotone",
	});
}

export default Component;
