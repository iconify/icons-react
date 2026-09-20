import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rwjhm6bam.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rwjhm6bam"/>`,
		"fallback": "prime:barcode",
	});
}

export default Component;
