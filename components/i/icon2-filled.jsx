import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/jrp21-l0v.css';
import '../../css/h/hkw5iib4y.css';
import '../../css/x/xzymugb3i.css';
import '../../css/k/kqrdbispo.css';
import '../../css/g/gbr8k9aue.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="jrp21-l0v"/><path class="hkw5iib4y"/><path class="xzymugb3i"/><path class="kqrdbispo"/><path class="gbr8k9aue"/></g>`,
		"fallback": "reicon:icon2-filled",
	});
}

export default Component;
