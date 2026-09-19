import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ak_zvabur.css';
import '../../css/j/j67i8-bvf.css';
import '../../css/f/fn18_zbuh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ak_zvabur"/><path clip-rule="evenodd" class="j67i8-bvf"/><path class="fn18_zbuh"/></g>`,
		"fallback": "healthicons:baby-0203m",
	});
}

export default Component;
