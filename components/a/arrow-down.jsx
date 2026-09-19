import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nb5_nhbpq.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nb5_nhbpq"/>`,
		"fallback": "fa6-solid:arrow-down",
	});
}

export default Component;
