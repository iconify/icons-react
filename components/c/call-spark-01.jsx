import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/p/phcpqebqo.css';
import '../../css/u/uf96tybxw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="phcpqebqo"/><path class="uf96tybxw"/></g>`,
		"fallback": "hugeicons:call-spark-01",
	});
}

export default Component;
