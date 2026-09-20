import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/v/vk67feb3m.css';
import '../../css/e/ef7g0fbtq.css';
import '../../css/q/q7k182bia.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="vk67feb3m"/><path class="ef7g0fbtq"/><path class="q7k182bia"/></g>`,
		"fallback": "marketeq:files",
	});
}

export default Component;
