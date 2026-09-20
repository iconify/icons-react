import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/g/gfogd7bxz.css';
import '../../css/s/sshjqo7yj.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="gfogd7bxz"/><path class="sshjqo7yj"/></g>`,
		"fallback": "marketeq:film-movie",
	});
}

export default Component;
