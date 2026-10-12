import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g11id0skg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g11id0skg"/>`,
		"fallback": "lucide-extended:calendar-filled",
	});
}

export default Component;
