import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n28yuybeb.css';
import '../../css/o/og93wpq7z.css';
import '../../css/e/eeipk_bjn.css';
import '../../css/j/j2jofiwpv.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n28yuybeb"/><path clip-rule="evenodd" class="og93wpq7z"/><path class="eeipk_bjn"/><path clip-rule="evenodd" class="j2jofiwpv"/></g>`,
		"fallback": "glyphs:box-layout-3-duo",
	});
}

export default Component;
