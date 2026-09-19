import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ty1qptbpd.css';

const viewBox = {"width":280,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ty1qptbpd"/>`,
		"fallback": "zmdi:audio",
	});
}

export default Component;
