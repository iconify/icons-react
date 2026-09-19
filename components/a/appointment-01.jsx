import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/p3yq3u9df.css';
import '../../css/u/u-wu5bcsm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="p3yq3u9df"/><path class="u-wu5bcsm"/></g>`,
		"fallback": "hugeicons:appointment-01",
	});
}

export default Component;
