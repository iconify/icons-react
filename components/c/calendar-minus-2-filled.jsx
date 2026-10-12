import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b00pbxr6w.css';
import '../../css/g/gjba8cbzj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b00pbxr6w"/><path class="gjba8cbzj"/>`,
		"fallback": "lucide-extended:calendar-minus-2-filled",
	});
}

export default Component;
