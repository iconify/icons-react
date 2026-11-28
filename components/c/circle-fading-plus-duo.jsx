import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bjzczbv1j.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/kpy7gdb6x.css';
import '../../css/a/a8lfe2bhy.css';
import '../../css/g/g2ixckq-f.css';
import '../../css/g/g9s6rvssf.css';
import '../../css/r/rh6zb8b3i.css';
import '../../css/f/f6u9gi8rn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bjzczbv1j secondary"/><g class="dt0cm9dhy primary"><path class="kpy7gdb6x"/><path class="a8lfe2bhy"/><path class="g2ixckq-f"/><path class="g9s6rvssf"/><path class="rh6zb8b3i"/><path class="f6u9gi8rn"/></g>`,
		"fallback": "iconaut:circle-fading-plus-duo",
	});
}

export default Component;
