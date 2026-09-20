import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/slbmp05ij.css';
import '../../css/v/vbga37b5u.css';
import '../../css/j/jzs00pbkg.css';
import '../../css/x/xku78zbcg.css';
import '../../css/f/ffaf7db7l.css';
import '../../css/o/obw1o1b2b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="slbmp05ij"/><path class="vbga37b5u"/><path class="jzs00pbkg"/><path class="xku78zbcg"/><path class="ffaf7db7l"/><path class="obw1o1b2b"/></g>`,
		"fallback": "streamline-ultimate-color:file-java",
	});
}

export default Component;
