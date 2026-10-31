import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yt8_6yb7w.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yt8_6yb7w"/>`,
		"fallback": "sidekickicons:indent-16-solid",
	});
}

export default Component;
