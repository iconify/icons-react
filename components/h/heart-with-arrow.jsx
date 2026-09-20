import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zm4miebwu.css';
import '../../css/k/kbtpf3fuc.css';
import '../../css/g/gcdi2ob1m.css';
import '../../css/o/oaxr94b2h.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zm4miebwu"/><path class="kbtpf3fuc"/><path class="gcdi2ob1m"/><path class="oaxr94b2h"/>`,
		"fallback": "openmoji:heart-with-arrow",
	});
}

export default Component;
