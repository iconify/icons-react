import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ze429bcme.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ze429bcme"/>`,
		"fallback": "sidekickicons:dice-20-solid",
	});
}

export default Component;
