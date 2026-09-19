import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/s/si6r-2bab.css';
import '../../css/c/ckmzm_tkq.css';
import '../../css/o/o94ui2bgx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="si6r-2bab"/><path class="ckmzm_tkq"/><path class="o94ui2bgx"/></g>`,
		"fallback": "hugeicons:archer",
	});
}

export default Component;
