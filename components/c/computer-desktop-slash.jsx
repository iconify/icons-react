import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufmuf6t2b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ufmuf6t2b"/>`,
		"fallback": "sidekickicons:computer-desktop-slash",
	});
}

export default Component;
