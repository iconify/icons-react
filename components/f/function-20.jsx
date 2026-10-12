import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pghs5ubcb.css';
import '../../css/k/kuvw34acp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pghs5ubcb"/><path class="kuvw34acp"/>`,
		"fallback": "energy-icons:function-20",
	});
}

export default Component;
