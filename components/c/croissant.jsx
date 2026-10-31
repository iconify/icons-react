import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/us0u3x3yq.css';
import '../../css/i/i6wydjbva.css';
import '../../css/d/dk54v-gay.css';
import '../../css/s/s1ie28b-p.css';
import '../../css/f/fy4jxibwk.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="us0u3x3yq"/><path class="i6wydjbva"/><path class="dk54v-gay"/><path class="s1ie28b-p"/><path class="fy4jxibwk"/>`,
		"fallback": "iconito:croissant",
	});
}

export default Component;
