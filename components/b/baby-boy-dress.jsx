import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/ys_zhewgg.css';
import '../../css/j/jcat81bta.css';
import '../../css/x/xmh7xxbak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ys_zhewgg"/><path class="jcat81bta"/><path class="xmh7xxbak"/></g>`,
		"fallback": "hugeicons:baby-boy-dress",
	});
}

export default Component;
