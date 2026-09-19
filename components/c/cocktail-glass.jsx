import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b9e1ifbih.css';
import '../../css/j/j-klc98dh.css';
import '../../css/z/z_x-bwblw.css';
import '../../css/z/zub92_ove.css';
import '../../css/r/rr6s2mbiz.css';
import '../../css/q/q-bsbwblg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b9e1ifbih"/><path class="j-klc98dh"/><path class="z_x-bwblw"/><path class="zub92_ove"/><path class="rr6s2mbiz"/><path class="q-bsbwblg"/></g>`,
		"fallback": "fluent-emoji-flat:cocktail-glass",
	});
}

export default Component;
