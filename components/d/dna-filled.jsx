import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pk-a4eb3f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pk-a4eb3f"/>`,
		"fallback": "reicon:dna-filled",
	});
}

export default Component;
