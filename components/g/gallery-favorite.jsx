import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gbcg_ebez.css';
import '../../css/c/cx3v-gb9c.css';
import '../../css/o/otv2qb06x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="gbcg_ebez"/><path class="cx3v-gb9c"/><path class="otv2qb06x"/></g>`,
		"fallback": "reicon:gallery-favorite",
	});
}

export default Component;
