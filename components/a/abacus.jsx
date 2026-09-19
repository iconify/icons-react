import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jip_kv-6y.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jip_kv-6y"/>`,
		"fallback": "fa-solid:abacus",
	});
}

export default Component;
