import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/p/pjhi7gbuq.css';
import '../../css/f/ft9--ubvs.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="pjhi7gbuq"/><path class="ft9--ubvs"/></g>`,
		"fallback": "marketeq:database-2",
	});
}

export default Component;
