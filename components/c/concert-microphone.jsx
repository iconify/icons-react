import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/cyvece18b.css';
import '../../css/b/be5vpxepo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="cyvece18b"/><path class="be5vpxepo"/></g>`,
		"fallback": "streamline-ultimate:concert-microphone",
	});
}

export default Component;
