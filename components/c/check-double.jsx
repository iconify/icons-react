import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/j/jfud8mbpg.css';
import '../../css/h/huwz9dbjg.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="jfud8mbpg"/><path class="huwz9dbjg"/></g>`,
		"fallback": "marketeq:check-double",
	});
}

export default Component;
