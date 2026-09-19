import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nv2z275ix.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nv2z275ix"/>`,
		"fallback": "fa6-regular:face-smile-beam",
	});
}

export default Component;
