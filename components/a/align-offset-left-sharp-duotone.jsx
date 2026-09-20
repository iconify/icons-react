import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/r/rimwulb6m.css';
import '../../css/d/d2wv40upu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="rimwulb6m"/><path class="d2wv40upu"/></g>`,
		"fallback": "keyline-icons:align-offset-left-sharp-duotone",
	});
}

export default Component;
