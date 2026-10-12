import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hs_acsbeb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hs_acsbeb"/>`,
		"fallback": "lucide-extended:align-horizontal-distribute-end-filled",
	});
}

export default Component;
