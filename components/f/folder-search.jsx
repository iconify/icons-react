import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/asdc_-oox.css';
import '../../css/d/dxmn46ytv.css';
import '../../css/j/jjr19d3zu.css';
import '../../css/l/lzdivjfpa.css';
import '../../css/r/rt9v9sb0t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="asdc_-oox wm-k"/><path class="dxmn46ytv wm-shine"/><path class="jjr19d3zu wm-shine"/><path class="lzdivjfpa wm-shine"/><path class="rt9v9sb0t wm-shine"/></g>`,
		"fallback": "withicons-lunar:folder-search",
	});
}

export default Component;
