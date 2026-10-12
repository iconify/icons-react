import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ro6flcd8h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ro6flcd8h"/>`,
		"fallback": "lucide-extended:heart-crack-filled",
	});
}

export default Component;
