import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mfuv_1wwz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mfuv_1wwz"/>`,
		"fallback": "sidekickicons:bluetooth-20-solid",
	});
}

export default Component;
