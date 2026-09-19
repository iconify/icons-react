import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jc5jozb4o.css';
import '../../css/y/y7tupwi0b.css';
import '../../css/e/ev-hbqf4m.css';
import '../../css/a/a9duiwbhm.css';
import '../../css/j/jutvq1bsl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jc5jozb4o"/><path class="y7tupwi0b"/><path class="ev-hbqf4m"/><path class="a9duiwbhm"/><path class="jutvq1bsl"/>`,
		"fallback": "fxemoji:imp",
	});
}

export default Component;
