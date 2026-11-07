import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pm9z_7bmn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pm9z_7bmn"/>`,
		"fallback": "sidekickicons:car-20-solid",
	});
}

export default Component;
