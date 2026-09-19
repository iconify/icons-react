import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/puo94vz7x.css';

const viewBox = {"width":400,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="puo94vz7x"/>`,
		"fallback": "fa-brands:gofore",
	});
}

export default Component;
