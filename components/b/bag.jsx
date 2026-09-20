import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/z/z6_i02v8l.css';
import '../../css/b/buniejoaf.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="z6_i02v8l"/><path class="buniejoaf"/></g>`,
		"fallback": "marketeq:bag",
	});
}

export default Component;
