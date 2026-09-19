import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hhwvkccwj.css';
import '../../css/f/fk51_rbjn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="hhwvkccwj"/><path class="fk51_rbjn"/></g>`,
		"fallback": "hugeicons:bootstrap",
	});
}

export default Component;
