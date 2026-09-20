import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hk-e89f9b.css';
import '../../css/m/mhilw14xe.css';
import '../../css/x/xjexkabcq.css';
import '../../css/s/ssr5o-bim.css';

const viewBox = {"width":42,"height":42,"top":-1};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hk-e89f9b"/><path class="mhilw14xe"/><path class="xjexkabcq"/><path class="ssr5o-bim"/></g>`,
		"fallback": "streamline-stickies-color:bug",
	});
}

export default Component;
