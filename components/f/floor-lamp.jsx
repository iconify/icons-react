import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/t/t8bf_nbmj.css';
import '../../css/a/avooz63fk.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="t8bf_nbmj"/><path class="avooz63fk"/></g>`,
		"fallback": "marketeq:floor-lamp",
	});
}

export default Component;
