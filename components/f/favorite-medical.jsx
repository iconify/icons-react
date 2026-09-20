import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/bkc5h8-sk.css';
import '../../css/p/pmuix798g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="bkc5h8-sk"/><path class="pmuix798g"/></g>`,
		"fallback": "streamline-ultimate:favorite-medical",
	});
}

export default Component;
