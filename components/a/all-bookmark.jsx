import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/s54hki70x.css';
import '../../css/z/z6kf3ab0j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="s54hki70x"/><path class="z6kf3ab0j"/></g>`,
		"fallback": "hugeicons:all-bookmark",
	});
}

export default Component;
