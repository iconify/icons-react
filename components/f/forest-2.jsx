import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/g/gsb520u7l.css';
import '../../css/q/q6gd3r-ar.css';
import '../../css/g/gfvuqbcbh.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="gsb520u7l"/><path class="q6gd3r-ar"/><path class="gfvuqbcbh"/></g>`,
		"fallback": "marketeq:forest-2",
	});
}

export default Component;
