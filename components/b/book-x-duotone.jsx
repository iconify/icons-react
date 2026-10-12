import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f9tkrk29k.css';
import '../../css/s/ssh18kvpm.css';
import '../../css/e/emg88iban.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f9tkrk29k"/><path class="ssh18kvpm"/><path class="emg88iban"/></g>`,
		"fallback": "lucide-extended:book-x-duotone",
	});
}

export default Component;
