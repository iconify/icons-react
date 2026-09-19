import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/za70xkulc.css';
import '../../css/z/zj82fgh6g.css';
import '../../css/j/jfsc1ebhd.css';
import '../../css/h/ho_kgdb6v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="za70xkulc"/><path clip-rule="evenodd" class="zj82fgh6g"/><path class="jfsc1ebhd"/><path clip-rule="evenodd" class="ho_kgdb6v"/></g>`,
		"fallback": "healthicons:coughing",
	});
}

export default Component;
