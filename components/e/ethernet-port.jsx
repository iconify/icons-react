import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qhuyqe-cm.css';
import '../../css/w/wyw-5yqaz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="qhuyqe-cm"/><path class="wyw-5yqaz"/></g>`,
		"fallback": "streamline-ultimate:ethernet-port",
	});
}

export default Component;
