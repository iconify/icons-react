import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/b3wxq_b9b.css';
import '../../css/z/zzc4ijb4z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="b3wxq_b9b"/><path class="zzc4ijb4z"/></g>`,
		"fallback": "hugeicons:drum",
	});
}

export default Component;
