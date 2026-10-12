import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qps5svx2l.css';
import '../../css/d/d7tmwc-kq.css';
import '../../css/l/lbpgzetic.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qps5svx2l"/><path class="d7tmwc-kq"/><path class="lbpgzetic"/></g>`,
		"fallback": "lucide-extended:container-duotone",
	});
}

export default Component;
