import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kbw01lbki.css';
import '../../css/n/n2ifbxbof.css';
import '../../css/e/ecag-tbkr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kbw01lbki"/><path class="n2ifbxbof"/><path class="ecag-tbkr"/>`,
		"fallback": "energy-icons:ceiling-light-20",
	});
}

export default Component;
