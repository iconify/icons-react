import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/jxgapzbsn.css';
import '../../css/x/xpm479b3q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="jxgapzbsn"/><path class="xpm479b3q"/></g>`,
		"fallback": "hugeicons:codesandbox",
	});
}

export default Component;
