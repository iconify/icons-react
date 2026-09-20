import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fyzk63bam.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fyzk63bam"/>`,
		"fallback": "mdi:currency-btc",
	});
}

export default Component;
