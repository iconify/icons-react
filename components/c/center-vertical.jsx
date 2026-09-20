import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/q08khjbwt.css';
import '../../css/j/jc6w6-bos.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="q08khjbwt"/><rect transform="matrix(0 -1 -1 0 18.5 15)" class="jc6w6-bos"/></g>`,
		"fallback": "proicons:center-vertical",
	});
}

export default Component;
