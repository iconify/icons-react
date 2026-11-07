import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wk5fq_b9n.css';
import '../../css/z/zgs7zguvi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="wk5fq_b9n"/><path class="zgs7zguvi"/></g>`,
		"fallback": "solar:dumbbells-2-broken",
	});
}

export default Component;
