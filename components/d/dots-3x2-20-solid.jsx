import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e2gpyo16f.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e2gpyo16f"/>`,
		"fallback": "sidekickicons:dots-3x2-20-solid",
	});
}

export default Component;
