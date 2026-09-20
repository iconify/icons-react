import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yu5t0njoc.css';
import '../../css/p/p9-rcnbpg.css';
import '../../css/h/h6yrkj2wo.css';
import '../../css/q/q-j8rrb9q.css';
import '../../css/v/v1mhp2j5i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yu5t0njoc"/><path class="p9-rcnbpg"/><path class="h6yrkj2wo"/><path class="q-j8rrb9q"/><circle class="v1mhp2j5i"/>`,
		"fallback": "thesvg-color:hunyuan",
	});
}

export default Component;
