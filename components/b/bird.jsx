import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/haib0ymyx.css';
import '../../css/x/xvy96vm6v.css';
import '../../css/o/oj-zv3btu.css';
import '../../css/o/oas-wrbbc.css';
import '../../css/j/jcyri5utd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="haib0ymyx"/><path class="xvy96vm6v"/><path class="oj-zv3btu"/><path class="oas-wrbbc"/><path class="jcyri5utd"/>`,
		"fallback": "fxemoji:bird",
	});
}

export default Component;
