import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wj-fa2b7o.css';
import '../../css/j/j6nph7o9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="wj-fa2b7o"/><path class="j6nph7o9k"/></g>`,
		"fallback": "streamline-ultimate:aircraft-chopper-2",
	});
}

export default Component;
