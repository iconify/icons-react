import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thjuvbz3w.css';
import '../../css/g/gc2zydb-d.css';
import '../../css/m/mp6j8dbhb.css';
import '../../css/z/zak4uuugf.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="thjuvbz3w"><path class="gc2zydb-d"/><path class="mp6j8dbhb"/><path class="zak4uuugf"/></g>`,
		"fallback": "streamline-stickies-color:eiffel-tower-duo",
	});
}

export default Component;
