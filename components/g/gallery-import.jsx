import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gbcg_ebez.css';
import '../../css/o/o_4xddcsw.css';
import '../../css/r/r8-4h7b5r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="gbcg_ebez"/><path class="o_4xddcsw"/><path class="r8-4h7b5r"/></g>`,
		"fallback": "reicon:gallery-import",
	});
}

export default Component;
