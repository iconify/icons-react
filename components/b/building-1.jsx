import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hji8f9b7e.css';
import '../../css/b/b__7uybkz.css';
import '../../css/m/mloc2fb5m.css';
import '../../css/c/c-ehasb9k.css';
import '../../css/n/na8g2hebh.css';
import '../../css/x/xk_kpac3m.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hji8f9b7e"/><path class="b__7uybkz"/><path clip-rule="evenodd" class="mloc2fb5m"/><path class="c-ehasb9k"/><path class="na8g2hebh"/><path class="xk_kpac3m"/></g>`,
		"fallback": "glyphs-poly:building-1",
	});
}

export default Component;
