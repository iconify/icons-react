import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/id_dkzbpx.css';
import '../../css/b/by1hc2n7w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="id_dkzbpx"/><path class="by1hc2n7w"/></g>`,
		"fallback": "solar:braces-linear",
	});
}

export default Component;
