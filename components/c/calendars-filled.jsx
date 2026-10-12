import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zrqlv4q8g.css';
import '../../css/g/gc181eckg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zrqlv4q8g"/><path class="gc181eckg"/>`,
		"fallback": "lucide-extended:calendars-filled",
	});
}

export default Component;
