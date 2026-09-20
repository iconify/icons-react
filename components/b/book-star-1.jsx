import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qaqb1cc3j.css';
import '../../css/l/lrfvu_bje.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="qaqb1cc3j"/><path class="lrfvu_bje"/></g>`,
		"fallback": "streamline-ultimate:book-star-1",
	});
}

export default Component;
