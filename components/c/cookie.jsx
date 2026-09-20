import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wk1is2bdd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wk1is2bdd"/>`,
		"fallback": "meteor-icons:cookie",
	});
}

export default Component;
