import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xrsuk5b6z.css';
import '../../css/s/s_3yk55iu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xrsuk5b6z"/><path class="s_3yk55iu"/>`,
		"fallback": "mingcute:bling-line",
	});
}

export default Component;
