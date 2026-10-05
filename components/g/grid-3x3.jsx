import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/d/dzmruz_hf.css';
import '../../css/y/yhbz8hrrw.css';
import '../../css/n/nyjsafbqt.css';
import '../../css/x/xutjimb4i.css';
import '../../css/j/jpv7mlb9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="dzmruz_hf"/><path class="yhbz8hrrw"/><path class="nyjsafbqt"/><path class="xutjimb4i"/><path class="jpv7mlb9f"/></g>`,
		"fallback": "matita:grid-3x3",
	});
}

export default Component;
