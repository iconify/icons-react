import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lmo9ppb1i.css';
import '../../css/a/a9ppz5tnn.css';
import '../../css/z/zehobabjs.css';
import '../../css/i/idu6018ed.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="lmo9ppb1i"><path class="a9ppz5tnn"/><path class="zehobabjs"/><path class="idu6018ed"/></g>`,
		"fallback": "streamline-ultimate-color:hair-dress-round-brush",
	});
}

export default Component;
