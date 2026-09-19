import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lxhmx4bdy.css';
import '../../css/g/gy-xx9boc.css';
import '../../css/f/f11xa_ktj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lxhmx4bdy"/><path class="gy-xx9boc"/><path class="f11xa_ktj"/></g>`,
		"fallback": "fluent-emoji-flat:crystal-ball",
	});
}

export default Component;
