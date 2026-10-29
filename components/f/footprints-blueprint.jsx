import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/d/dt3yg1qsa.css';
import '../../css/t/tsa86mbae.css';
import '../../css/y/ywk5os59u.css';
import '../../css/y/ywlhoqbsn.css';
import '../../css/k/k26yyvc5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="dt3yg1qsa wm-deco"/><path class="tsa86mbae wm-deco"/><path class="wm-deco ywk5os59u"/><path class="wm-k ywlhoqbsn"/><path class="k26yyvc5e wm-a"/></g>`,
		"fallback": "withicons:footprints-blueprint",
	});
}

export default Component;
