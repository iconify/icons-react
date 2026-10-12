import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a2c8qbzit.css';
import '../../css/v/vux-2mbqu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a2c8qbzit"/><path class="vux-2mbqu"/>`,
		"fallback": "lucide-extended:calendar-chevrons-right-filled",
	});
}

export default Component;
