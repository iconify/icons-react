import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/nu_5-4bcu.css';
import '../../css/h/he4gp5b4k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="nu_5-4bcu"/><path class="he4gp5b4k"/></g>`,
		"fallback": "reicon:blend2",
	});
}

export default Component;
