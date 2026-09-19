import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dla593c_j.css';
import '../../css/f/fdb02yzdg.css';
import '../../css/i/i3v15pbcy.css';
import '../../css/n/n4_xwx-hy.css';
import '../../css/h/hzshps7eh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dla593c_j"/><path class="fdb02yzdg"/><path class="i3v15pbcy"/><path class="n4_xwx-hy"/><path class="hzshps7eh"/></g>`,
		"fallback": "fluent-emoji-flat:cup-with-straw",
	});
}

export default Component;
