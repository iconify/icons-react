import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/unjja_t1u.css';
import '../../css/m/mi2w8hksr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="unjja_t1u"/><path class="mi2w8hksr"/></g>`,
		"fallback": "hugeicons:arrow-reload-vertical",
	});
}

export default Component;
