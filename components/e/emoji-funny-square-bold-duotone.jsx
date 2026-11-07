import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t2sxq7b5r.css';
import '../../css/n/nqs92bb2p.css';
import '../../css/i/ijcx_p_-b.css';
import '../../css/o/o7_qo9bal.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t2sxq7b5r"/><path class="nqs92bb2p"/><path class="ijcx_p_-b"/><path class="o7_qo9bal"/>`,
		"fallback": "solar:emoji-funny-square-bold-duotone",
	});
}

export default Component;
