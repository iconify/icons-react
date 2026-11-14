import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/sp3ymr0mh.css';
import '../../css/l/lo5azsbyk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="sp3ymr0mh"/><path class="lo5azsbyk"/></g>`,
		"fallback": "hugeicons:folder-unlocked",
	});
}

export default Component;
