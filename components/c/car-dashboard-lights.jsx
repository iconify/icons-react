import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a-13f8bxy.css';
import '../../css/e/eg_ob1d5w.css';
import '../../css/s/svz4jgm1a.css';
import '../../css/x/x19qmcbwy.css';
import '../../css/z/zillzfb0b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a-13f8bxy"/><path class="eg_ob1d5w"/><path class="svz4jgm1a"/><path class="x19qmcbwy"/><path class="zillzfb0b"/></g>`,
		"fallback": "streamline-ultimate-color:car-dashboard-lights",
	});
}

export default Component;
