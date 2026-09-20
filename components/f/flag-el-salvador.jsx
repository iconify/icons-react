import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/codjm1acu.css';
import '../../css/r/r73utib8z.css';
import '../../css/q/qfvvu5w-c.css';
import '../../css/r/rkeorib6d.css';
import '../../css/a/a0bh4-bmv.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="codjm1acu"/><path class="r73utib8z"/><path class="qfvvu5w-c"/><circle class="rkeorib6d"/><path class="a0bh4-bmv"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-el-salvador",
	});
}

export default Component;
