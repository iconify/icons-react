import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e4gfxezaz.css';
import '../../css/u/uf0djwe_w.css';
import '../../css/l/lzt6yfbwd.css';
import '../../css/c/cgm351bxe.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e4gfxezaz"/><path class="uf0djwe_w"/><path class="lzt6yfbwd"/><path class="cgm351bxe"/></g>`,
		"fallback": "fluent-emoji-flat:goggles",
	});
}

export default Component;
