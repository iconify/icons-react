import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j6a5x9bff.css';
import '../../css/c/cwtdbgb_d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j6a5x9bff"/><path class="cwtdbgb_d"/>`,
		"fallback": "lucide-extended:calendar-chevrons-left-filled",
	});
}

export default Component;
