import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w0s7lfbaz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w0s7lfbaz"/>`,
		"fallback": "sidekickicons:heading-20-solid",
	});
}

export default Component;
