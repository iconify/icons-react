import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dajvep74v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dajvep74v"/>`,
		"fallback": "selfhst:influxdb",
	});
}

export default Component;
