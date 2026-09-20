import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/o/ouh-gobdj.css';
import '../../css/g/gfva2d1li.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="ouh-gobdj"/><path class="gfva2d1li"/></g>`,
		"fallback": "keyline-icons:heading-1-sharp-two-tone",
	});
}

export default Component;
