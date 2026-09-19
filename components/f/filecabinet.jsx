import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l2352-x7e.css';
import '../../css/d/ddghisbre.css';
import '../../css/t/t2eq5l4fy.css';
import '../../css/d/dw1cp2bek.css';
import '../../css/m/m_71g0e5i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l2352-x7e"/><path class="ddghisbre"/><path class="t2eq5l4fy"/><path class="dw1cp2bek"/><path class="m_71g0e5i"/>`,
		"fallback": "fxemoji:filecabinet",
	});
}

export default Component;
