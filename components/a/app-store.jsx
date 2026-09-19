import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cjyxxf14t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cjyxxf14t"/>`,
		"fallback": "fa6-brands:app-store",
	});
}

export default Component;
