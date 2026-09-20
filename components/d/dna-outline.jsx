import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/okjza0b-j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="okjza0b-j"/>`,
		"fallback": "solar:dna-outline",
	});
}

export default Component;
