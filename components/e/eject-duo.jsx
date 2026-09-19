import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zmcvpkqsr.css';
import '../../css/d/dt01lhfcc.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zmcvpkqsr"/><path class="dt01lhfcc"/></g>`,
		"fallback": "glyphs:eject-duo",
	});
}

export default Component;
