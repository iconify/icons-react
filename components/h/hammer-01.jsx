import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hqaligzzq.css';
import '../../css/q/qs7iabbzg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="hqaligzzq"/><path class="qs7iabbzg"/></g>`,
		"fallback": "hugeicons:hammer-01",
	});
}

export default Component;
