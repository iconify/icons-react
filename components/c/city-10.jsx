import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cfa3flb3a.css';
import '../../css/r/r15gun69d.css';
import '../../css/n/n1m51rqht.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cfa3flb3a"/><path class="r15gun69d"/><path class="n1m51rqht"/></g>`,
		"fallback": "tdesign:city-10",
	});
}

export default Component;
