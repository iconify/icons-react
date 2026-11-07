import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jbgenzzof.css';
import '../../css/f/fu36ikuad.css';
import '../../css/u/u6-7e5-on.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jbgenzzof"/><path clip-rule="evenodd" class="fu36ikuad"/><path clip-rule="evenodd" class="u6-7e5-on"/>`,
		"fallback": "solar:inbox-line-bold",
	});
}

export default Component;
