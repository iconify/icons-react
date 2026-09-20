import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/y/y4i6twg9n.css';
import '../../css/c/cnu7twbsj.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="y4i6twg9n"/><path class="cnu7twbsj"/></g>`,
		"fallback": "marketeq:cabinet-4",
	});
}

export default Component;
