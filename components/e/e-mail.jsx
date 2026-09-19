import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sg_i0lv_p.css';
import '../../css/l/l8_s1ibqj.css';
import '../../css/i/i8v2dubii.css';
import '../../css/v/v8ilgyb-l.css';
import '../../css/h/hu4x58b2g.css';
import '../../css/o/o_qurnmes.css';
import '../../css/n/nywhg213t.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="sg_i0lv_p"/><rect class="l8_s1ibqj"/><path class="i8v2dubii"/><path class="v8ilgyb-l"/><path class="hu4x58b2g"/><path class="o_qurnmes"/><path class="nywhg213t"/></g>`,
		"fallback": "fluent-emoji-flat:e-mail",
	});
}

export default Component;
