import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/l/lp8lhlb1o.css';
import '../../css/s/sz7i2xb4j.css';
import '../../css/v/vupfj4bbw.css';
import '../../css/z/zjenxebue.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="lp8lhlb1o"/><path class="sz7i2xb4j"/><path class="vupfj4bbw"/><path class="zjenxebue"/></g>`,
		"fallback": "icon-park:face-recognition",
	});
}

export default Component;
