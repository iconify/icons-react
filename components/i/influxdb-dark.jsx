import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wup54xb4z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wup54xb4z"/>`,
		"fallback": "selfhst:influxdb-dark",
	});
}

export default Component;
