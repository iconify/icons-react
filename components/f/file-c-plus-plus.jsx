import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/put8dwbue.css';
import '../../css/x/xbr7_ab0i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="put8dwbue"/><path class="xbr7_ab0i"/></g>`,
		"fallback": "streamline-ultimate:file-c-plus-plus",
	});
}

export default Component;
