import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iytxjw3_j.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="iytxjw3_j"/>`,
		"fallback": "sidekickicons:arrow-path-single-clockwise-20-solid",
	});
}

export default Component;
