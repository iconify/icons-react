import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k6qizcvhk.css';
import '../../css/y/yk9ufrxqu.css';
import '../../css/y/ych83_bej.css';
import '../../css/n/n1mrteb8e.css';
import '../../css/q/q-3p_7bja.css';
import '../../css/i/ixq1o8b5k.css';
import '../../css/w/wm3v2rb1w.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="k6qizcvhk"/><path class="yk9ufrxqu"/><path class="ych83_bej"/><path class="n1mrteb8e"/><path clip-rule="evenodd" class="q-3p_7bja"/><ellipse class="ixq1o8b5k"/><path clip-rule="evenodd" class="wm3v2rb1w"/>`,
		"fallback": "thesvg-color:electron",
	});
}

export default Component;
