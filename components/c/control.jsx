import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umm606kxf.css';
import '../../css/f/fmidmjb6y.css';
import '../../css/g/g0j5f0vrs.css';
import '../../css/b/b2_7pvbbm.css';
import '../../css/r/raaj8abjd.css';

const viewBox = {"width":42,"height":42,"top":-1};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="umm606kxf"><path class="fmidmjb6y"/><path class="g0j5f0vrs"/><path class="b2_7pvbbm"/><path class="raaj8abjd"/></g>`,
		"fallback": "streamline-stickies-color:control",
	});
}

export default Component;
