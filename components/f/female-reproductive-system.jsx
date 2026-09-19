import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lt5wty21e.css';
import '../../css/m/mh40agbik.css';
import '../../css/v/vjoic9nzj.css';
import '../../css/e/eme0i_mbi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lt5wty21e"/><path clip-rule="evenodd" class="mh40agbik"/><path class="vjoic9nzj"/><path clip-rule="evenodd" class="eme0i_mbi"/></g>`,
		"fallback": "healthicons:female-reproductive-system",
	});
}

export default Component;
