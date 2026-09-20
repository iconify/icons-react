import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/a/aq9czdb1r.css';
import '../../css/t/tdz9psbsf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="aq9czdb1r"/><path class="tdz9psbsf"/></g>`,
		"fallback": "streamline-sharp:bill-dollar-1",
	});
}

export default Component;
