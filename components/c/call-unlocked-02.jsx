import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fzjvfms5j.css';
import '../../css/b/bij_adcel.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="fzjvfms5j"/><path class="bij_adcel"/></g>`,
		"fallback": "hugeicons:call-unlocked-02",
	});
}

export default Component;
