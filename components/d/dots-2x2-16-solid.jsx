import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fr9tc44vt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fr9tc44vt"/>`,
		"fallback": "sidekickicons:dots-2x2-16-solid",
	});
}

export default Component;
