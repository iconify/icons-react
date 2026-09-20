import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/az8dcqgmq.css';
import '../../css/g/gcwqm4-4k.css';
import '../../css/x/xgtgfnecr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="az8dcqgmq"/><path class="gcwqm4-4k"/><path class="xgtgfnecr"/></g>`,
		"fallback": "reicon:box-add",
	});
}

export default Component;
