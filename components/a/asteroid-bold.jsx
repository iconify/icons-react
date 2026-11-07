import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cq1o4rbim.css';
import '../../css/b/b1o-4174v.css';
import '../../css/c/cu88vc6ti.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cq1o4rbim"/><path class="b1o-4174v"/><path class="cu88vc6ti"/>`,
		"fallback": "solar:asteroid-bold",
	});
}

export default Component;
