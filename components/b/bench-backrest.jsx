import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ubntm-bhw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ubntm-bhw"/>`,
		"fallback": "roentgen:bench-backrest",
	});
}

export default Component;
