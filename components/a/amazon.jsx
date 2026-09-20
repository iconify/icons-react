import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xkyxzwb9q.css';
import '../../css/g/gtu5jma0d.css';
import '../../css/z/z85hs19cn.css';
import '../../css/x/xmrfcvbfw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xkyxzwb9q"><path class="gtu5jma0d"/><path class="z85hs19cn"/><path class="xmrfcvbfw"/></g>`,
		"fallback": "streamline-color:amazon",
	});
}

export default Component;
