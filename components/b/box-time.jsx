import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gcwqm4-4k.css';
import '../../css/x/xgtgfnecr.css';
import '../../css/i/iqja8bcqa.css';
import '../../css/v/vbslnbc8a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="gcwqm4-4k"/><path class="xgtgfnecr"/><path class="iqja8bcqa"/><path class="vbslnbc8a"/></g>`,
		"fallback": "reicon:box-time",
	});
}

export default Component;
