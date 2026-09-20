import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sgsrnm8tv.css';
import '../../css/j/jfl1m_hze.css';
import '../../css/g/gv6pv-b2u.css';
import '../../css/k/kf3ab9vwr.css';
import '../../css/f/fin7epbed.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="sgsrnm8tv"/><path class="jfl1m_hze"/><path class="gv6pv-b2u"/><path class="kf3ab9vwr"/><path class="fin7epbed"/></g>`,
		"fallback": "skill-icons:electron",
	});
}

export default Component;
