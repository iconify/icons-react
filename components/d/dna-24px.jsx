import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sozr8sbps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sozr8sbps"/>`,
		"fallback": "healthicons:dna-24px",
	});
}

export default Component;
