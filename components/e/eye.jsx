import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/j/j-kbj2b1n.css';
import '../../css/m/mbyhm4mhd.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="j-kbj2b1n"/><path class="mbyhm4mhd"/></g>`,
		"fallback": "marketeq:eye",
	});
}

export default Component;
