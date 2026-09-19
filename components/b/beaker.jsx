import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fnjr8vb_p.css';

const viewBox = {"width":27,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fnjr8vb_p"/>`,
		"fallback": "et:beaker",
	});
}

export default Component;
