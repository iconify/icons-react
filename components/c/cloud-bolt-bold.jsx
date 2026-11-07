import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/akziae8mx.css';
import '../../css/h/h3ccn7bcv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="akziae8mx"/><path class="h3ccn7bcv"/>`,
		"fallback": "solar:cloud-bolt-bold",
	});
}

export default Component;
