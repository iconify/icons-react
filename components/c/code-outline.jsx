import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/p/p0soagb_d.css';
import '../../css/x/xfv6obcwx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="p0soagb_d"/><path class="xfv6obcwx"/></g>`,
		"fallback": "bitcoin-icons:code-outline",
	});
}

export default Component;
