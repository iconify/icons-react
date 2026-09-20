import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/z6re8rbyg.css';
import '../../css/b/b1m8i_e0u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="z6re8rbyg"/><path class="b1m8i_e0u"/></g>`,
		"fallback": "reicon:audio-square",
	});
}

export default Component;
