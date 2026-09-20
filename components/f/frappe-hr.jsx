import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nevv_l36w.css';
import '../../css/g/gtg8rbctr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nevv_l36w"/><path class="gtg8rbctr"/>`,
		"fallback": "selfhst:frappe-hr",
	});
}

export default Component;
