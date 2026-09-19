import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n-zswn07o.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n-zswn07o"/>`,
		"fallback": "fluent-mdl2:external-x-a-m-l",
	});
}

export default Component;
