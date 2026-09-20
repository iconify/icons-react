import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o89xl2b0r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o89xl2b0r"/>`,
		"fallback": "tabler:dna-2-off",
	});
}

export default Component;
