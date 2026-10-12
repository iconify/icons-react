import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u2k95bbmx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u2k95bbmx"/>`,
		"fallback": "lucide-extended:clock-1-filled",
	});
}

export default Component;
