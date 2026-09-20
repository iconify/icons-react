import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/o/ogtgwab_d.css';
import '../../css/t/to2ro_byq.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="ogtgwab_d"/><path class="to2ro_byq"/></g>`,
		"fallback": "marketeq:arrival",
	});
}

export default Component;
