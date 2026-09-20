import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/x/xz-j46zvw.css';
import '../../css/y/yjt9fsb1n.css';
import '../../css/z/zfhy-qble.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="xz-j46zvw"/><path class="yjt9fsb1n"/><path class="zfhy-qble"/></g>`,
		"fallback": "streamline-plump:fried-egg-breakfast",
	});
}

export default Component;
