import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wcpth-wqs.css';
import '../../css/l/lx7mkia0m.css';
import '../../css/h/hkc780bsc.css';
import '../../css/p/pkssvg6_z.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wcpth-wqs"/><path class="lx7mkia0m"/><path class="hkc780bsc"/><path class="pkssvg6_z"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-guinea-bissau",
	});
}

export default Component;
