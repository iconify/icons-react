import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/b/bdahycckl.css';
import '../../css/i/i2quinaga.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="bdahycckl"/><path class="i2quinaga"/></g>`,
		"fallback": "marketeq:down-up-scroll-bar",
	});
}

export default Component;
