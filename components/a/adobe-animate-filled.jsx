import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wp9pt-bnu.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wp9pt-bnu"/>`,
		"fallback": "dinkie-icons:adobe-animate-filled",
	});
}

export default Component;
