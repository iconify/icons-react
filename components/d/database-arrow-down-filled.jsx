import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nuz5_lbms.css';
import '../../css/f/f4f8fe34r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nuz5_lbms"/><path class="f4f8fe34r"/>`,
		"fallback": "lucide-extended:database-arrow-down-filled",
	});
}

export default Component;
