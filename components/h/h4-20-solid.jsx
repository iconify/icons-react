import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p3mbkdb_l.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p3mbkdb_l"/>`,
		"fallback": "sidekickicons:h4-20-solid",
	});
}

export default Component;
