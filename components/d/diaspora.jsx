import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c38ac1bbl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c38ac1bbl"/>`,
		"fallback": "cib:diaspora",
	});
}

export default Component;
