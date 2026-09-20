import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o2y3484uo.css';
import '../../css/l/l9ga4rbig.css';
import '../../css/d/d36wgbpww.css';
import '../../css/n/nl6frqbyb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o2y3484uo"/><path class="l9ga4rbig"/><path class="d36wgbpww"/><path class="nl6frqbyb"/></g>`,
		"fallback": "streamline-cyber-color:alarm",
	});
}

export default Component;
