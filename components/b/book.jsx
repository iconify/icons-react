import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/r/rbrodccbq.css';
import '../../css/s/slyys2amg.css';
import '../../css/l/lvxf_-e5z.css';
import '../../css/s/sn229gegs.css';
import '../../css/n/nqds4ewfi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="rbrodccbq"/><path class="slyys2amg"/><path class="lvxf_-e5z"/><path class="sn229gegs"/><path class="nqds4ewfi"/></g>`,
		"fallback": "matita:book",
	});
}

export default Component;
