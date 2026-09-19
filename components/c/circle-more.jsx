import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o2uim_bve.css';
import '../../css/t/t4fyarb9e.css';
import '../../css/r/ravzi7blj.css';
import '../../css/b/b9_uigb7n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="o2uim_bve"/><circle class="t4fyarb9e"/><circle class="ravzi7blj"/><path class="b9_uigb7n"/>`,
		"fallback": "circum:circle-more",
	});
}

export default Component;
