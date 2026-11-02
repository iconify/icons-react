import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i_76ry0sr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="i_76ry0sr"/>`,
		"fallback": "sidekickicons:corners-pointing-out-20-solid",
	});
}

export default Component;
