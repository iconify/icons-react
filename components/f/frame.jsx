import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/b/bq0ccccbg.css';
import '../../css/h/h38u6tbvl.css';
import '../../css/j/jwn385b7c.css';
import '../../css/s/s30flpedt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="bq0ccccbg"/><path class="h38u6tbvl"/><path class="jwn385b7c"/><path class="s30flpedt"/></g>`,
		"fallback": "matita:frame",
	});
}

export default Component;
