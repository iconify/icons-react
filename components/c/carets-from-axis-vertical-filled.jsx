import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mtw_a9i1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mtw_a9i1c"/>`,
		"fallback": "lucide-extended:carets-from-axis-vertical-filled",
	});
}

export default Component;
