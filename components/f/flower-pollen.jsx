import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fq-5qib8t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fq-5qib8t"/>`,
		"fallback": "mdi:flower-pollen",
	});
}

export default Component;
