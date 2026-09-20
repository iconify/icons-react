import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gbcg_ebez.css';
import '../../css/o/o_4xddcsw.css';
import '../../css/m/mrj90dyup.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="gbcg_ebez"/><path class="o_4xddcsw"/><path class="mrj90dyup"/></g>`,
		"fallback": "reicon:gallery-export",
	});
}

export default Component;
