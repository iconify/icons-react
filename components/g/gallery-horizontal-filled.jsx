import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kux6ai07l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kux6ai07l"/>`,
		"fallback": "lucide-extended:gallery-horizontal-filled",
	});
}

export default Component;
