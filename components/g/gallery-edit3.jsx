import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gbcg_ebez.css';
import '../../css/o/o_4xddcsw.css';
import '../../css/a/a8d9xeb6z.css';
import '../../css/q/qr5rcs9lf.css';
import '../../css/v/vefbi5k2g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="gbcg_ebez"/><path class="o_4xddcsw"/><path class="a8d9xeb6z"/><path class="qr5rcs9lf"/><path class="vefbi5k2g"/></g>`,
		"fallback": "reicon:gallery-edit3",
	});
}

export default Component;
