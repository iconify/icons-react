import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oeeo29i8m.css';
import '../../css/c/c47g_htja.css';
import '../../css/z/zoj52acor.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="oeeo29i8m"/><path class="c47g_htja"/><path class="zoj52acor"/></g>`,
		"fallback": "healthicons:female-reproductive-system-24px",
	});
}

export default Component;
