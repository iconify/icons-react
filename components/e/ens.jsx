import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wa3k2bkey.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wa3k2bkey"/>`,
		"fallback": "thesvg-color:ens",
	});
}

export default Component;
