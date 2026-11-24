import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xw2--ccna.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xw2--ccna"/>`,
		"fallback": "lucide-extended:earbuds-off-filled",
	});
}

export default Component;
