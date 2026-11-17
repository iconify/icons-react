import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/a/aycg3acys.css';
import '../../css/z/zt1mo70im.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="aycg3acys"/><path class="zt1mo70im"/></g>`,
		"fallback": "matita:forward",
	});
}

export default Component;
