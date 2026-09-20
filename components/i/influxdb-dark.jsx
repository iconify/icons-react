import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kcd8wsblj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kcd8wsblj"/>`,
		"fallback": "selfhst:influxdb-dark",
	});
}

export default Component;
