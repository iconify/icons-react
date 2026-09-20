import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fx-ibsb0s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fx-ibsb0s"/>`,
		"fallback": "lucide:a-arrow-down",
	});
}

export default Component;
