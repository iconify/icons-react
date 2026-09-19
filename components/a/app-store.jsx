import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l4_8vnbdg.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l4_8vnbdg"/>`,
		"fallback": "dinkie-icons:app-store",
	});
}

export default Component;
