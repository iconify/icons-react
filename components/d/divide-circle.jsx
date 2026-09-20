import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/c/c6h1i8y0m.css';
import '../../css/h/h334anbct.css';
import '../../css/a/a4lo4k5_r.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="c6h1i8y0m"/><path class="h334anbct"/><path class="a4lo4k5_r"/></g>`,
		"fallback": "marketeq:divide-circle",
	});
}

export default Component;
