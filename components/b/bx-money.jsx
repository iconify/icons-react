import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xw23apjax.css';
import '../../css/f/ftl0q4tvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xw23apjax"/><path class="ftl0q4tvv"/>`,
		"fallback": "bx:bx-money",
	});
}

export default Component;
