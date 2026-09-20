import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yn34-vucd.css';
import '../../css/b/b86d2abtw.css';
import '../../css/l/l_xd_ts3f.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yn34-vucd"/><path class="b86d2abtw"/><path class="l_xd_ts3f"/></g>`,
		"fallback": "streamline-color:diamond-2",
	});
}

export default Component;
