import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/m/mckcf-beo.css';
import '../../css/o/opaiunbom.css';
import '../../css/u/u48opbb7h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="mckcf-beo"/><path class="opaiunbom"/><path class="u48opbb7h"/></g>`,
		"fallback": "streamline-logos:dailybooth-logo",
	});
}

export default Component;
