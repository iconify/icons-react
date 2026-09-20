import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/je4if2brg.css';
import '../../css/d/d863ihbff.css';
import '../../css/r/rprqesblq.css';
import '../../css/r/r3d0_z9ca.css';
import '../../css/g/g1zyj_bdi.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="je4if2brg"/><path class="d863ihbff"/><path class="rprqesblq"/><path class="r3d0_z9ca"/><path class="g1zyj_bdi"/>`,
		"fallback": "streamline-pixel:coding-apps-websites-programming-bug",
	});
}

export default Component;
