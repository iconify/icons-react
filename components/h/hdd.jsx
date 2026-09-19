import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z6d4kgwdz.css';
import '../../css/j/jt42kebit.css';
import '../../css/e/ezw1i52ew.css';
import '../../css/t/thwemd3eh.css';
import '../../css/j/jmj9c6abz.css';
import '../../css/c/czd5gefvr.css';
import '../../css/m/m53j51vnc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="z6d4kgwdz"/><circle class="jt42kebit"/><circle class="ezw1i52ew"/><circle class="thwemd3eh"/><circle class="jmj9c6abz"/><path class="czd5gefvr"/><path class="m53j51vnc"/></g>`,
		"fallback": "icon-park:hdd",
	});
}

export default Component;
