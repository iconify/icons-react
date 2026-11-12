import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t5o3f9vcr.css';
import '../../css/w/w_tn9pbtn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t5o3f9vcr"/><path class="w_tn9pbtn"/>`,
		"fallback": "selfhst:glpi",
	});
}

export default Component;
