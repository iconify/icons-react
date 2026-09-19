import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/a/a1l92fp8o.css';
import '../../css/r/rv_3mobsj.css';
import '../../css/d/dnhbys-pl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="a1l92fp8o"/><path class="rv_3mobsj"/><path class="dnhbys-pl"/></g>`,
		"fallback": "icon-park:application-one",
	});
}

export default Component;
