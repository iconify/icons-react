import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm83secra.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vm83secra"/>`,
		"fallback": "sidekickicons:archive-box-arrow-up-20-solid",
	});
}

export default Component;
