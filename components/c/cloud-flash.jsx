import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/t/t1p-_avbx.css';
import '../../css/j/j5sy6dofk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="t1p-_avbx"/><path class="j5sy6dofk"/></g>`,
		"fallback": "streamline-cyber:cloud-flash",
	});
}

export default Component;
