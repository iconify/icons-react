import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lgpt4o-jv.css';
import '../../css/c/cdt7i-bzt.css';
import '../../css/y/y56d8dbbt.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lgpt4o-jv"/><path class="cdt7i-bzt"/><path class="y56d8dbbt"/></g>`,
		"fallback": "glyphs:d-pad-1-duo",
	});
}

export default Component;
