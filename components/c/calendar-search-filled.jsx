import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ineotobot.css';
import '../../css/j/j9mguybwz.css';
import '../../css/g/gjba8cbzj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ineotobot"/><path clip-rule="evenodd" class="j9mguybwz"/><path class="gjba8cbzj"/>`,
		"fallback": "lucide-extended:calendar-search-filled",
	});
}

export default Component;
