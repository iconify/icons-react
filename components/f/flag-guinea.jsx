import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wcpth-wqs.css';
import '../../css/h/hkc780bsc.css';
import '../../css/s/sbnun1btu.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wcpth-wqs"/><path class="hkc780bsc"/><path class="sbnun1btu"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-guinea",
	});
}

export default Component;
