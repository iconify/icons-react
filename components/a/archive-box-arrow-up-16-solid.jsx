import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e41i3kafz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e41i3kafz"/>`,
		"fallback": "sidekickicons:archive-box-arrow-up-16-solid",
	});
}

export default Component;
