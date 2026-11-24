import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yo-5sdbdm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yo-5sdbdm"/>`,
		"fallback": "lucide-extended:flag-triangle-right-filled",
	});
}

export default Component;
