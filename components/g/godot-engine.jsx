import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qvf9w4bku.css';
import '../../css/k/k3rbg31ca.css';
import '../../css/x/xceadkbim.css';
import '../../css/u/upb0fubsv.css';
import '../../css/r/rc4cprezw.css';
import '../../css/o/onbsnxmgd.css';
import '../../css/y/yzske9w4k.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qvf9w4bku"/><path class="k3rbg31ca"/><path class="xceadkbim"/><path class="upb0fubsv"/><path class="rc4cprezw"/><path class="onbsnxmgd"/><path class="yzske9w4k"/></g>`,
		"fallback": "thesvg-color:godot-engine",
	});
}

export default Component;
