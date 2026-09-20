import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/adt168bqy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="adt168bqy"/>`,
		"fallback": "mdi:flag-variant-minus-outline",
	});
}

export default Component;
