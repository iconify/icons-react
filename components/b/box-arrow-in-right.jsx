import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/uhmdhgbwz.css';
import '../../css/f/fr8qrkb5s.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="uhmdhgbwz"/><path class="fr8qrkb5s"/></g>`,
		"fallback": "bi:box-arrow-in-right",
	});
}

export default Component;
