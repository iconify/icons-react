import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/paskc84gy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="paskc84gy"/>`,
		"fallback": "simple-icons:betfair",
	});
}

export default Component;
