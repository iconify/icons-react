import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fsa6l1b2j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fsa6l1b2j"/>`,
		"fallback": "tabler:brand-infakt",
	});
}

export default Component;
