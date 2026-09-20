import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/h/hus16pvob.css';
import '../../css/a/auf21d9tc.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="hus16pvob"/><path class="auf21d9tc"/></g>`,
		"fallback": "marketeq:atom",
	});
}

export default Component;
