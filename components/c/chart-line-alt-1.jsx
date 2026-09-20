import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/t/tahwntbjw.css';
import '../../css/t/tmk6wbi2k.css';
import '../../css/w/ws5njkb9a.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="tahwntbjw"/><path class="tmk6wbi2k"/><path class="ws5njkb9a"/></g>`,
		"fallback": "marketeq:chart-line-alt-1",
	});
}

export default Component;
