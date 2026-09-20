import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j0zkqiy7a.css';
import '../../css/s/sp1v4sh2k.css';
import '../../css/q/q2bbcrdly.css';
import '../../css/g/gu7l-hbfg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j0zkqiy7a"/><path class="sp1v4sh2k"/><path class="q2bbcrdly"/><path class="gu7l-hbfg"/></g>`,
		"fallback": "streamline-ultimate-color:common-file-share",
	});
}

export default Component;
