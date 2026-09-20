import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sm217z1po.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sm217z1po"/>`,
		"fallback": "ri:book-shelf-line",
	});
}

export default Component;
