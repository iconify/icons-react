import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/l90nn-83o.css';
import '../../css/f/fnxn1_jre.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="l90nn-83o"/><path class="fnxn1_jre"/></g>`,
		"fallback": "proicons:chrome-restore",
	});
}

export default Component;
