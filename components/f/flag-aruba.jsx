import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cnqa97brp.css';
import '../../css/v/vu4d_4u0g.css';
import '../../css/p/pws3px9mo.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cnqa97brp"/><path class="vu4d_4u0g"/><path class="pws3px9mo"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-aruba",
	});
}

export default Component;
